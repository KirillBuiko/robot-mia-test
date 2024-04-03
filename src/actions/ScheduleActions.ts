import {IDBController} from "@/actions/interfaces/IDBController";
import {ResponseObject} from "@/types/RequestTypes";
import ResultCode from "@/types/ResultCode";
import {ScheduleOptions} from "@/actions/interfaces/ScheduleOptions";
import {TakeSlotDto} from "@/dtos/take-slot.dto";
import {GetScheduleDto} from "@/dtos/get-schedule.dto";
import {ScheduleDto} from "@/dtos/schedule.dto";
import _ from "lodash";
import {Schedule} from "@/typeorm/entities/Schedule";

export class ScheduleActions {
    constructor(private dbController: IDBController) {
    }

    async getSchedule(getScheduleData: GetScheduleDto): Promise<ResponseObject<ScheduleDto[]>> {
        const schedule = await this.dbController.schedule.getSchedule(getScheduleData);
        return {code: ResultCode.OK, result: schedule}
    }

    async createScheduleSlots(scheduleOptions: ScheduleOptions, endDate: string):
        Promise<ResponseObject<Partial<Schedule>[]>> {
        // very basic
        const doctors = await this.dbController.doctor.getDoctors();
        const slots = await this.dbController.schedule.getRawSchedule();

        const maxDoctorsTime = doctors.map((doctor) => {
            let max = _.maxBy(slots, (slot) => slot.doctor.id == doctor.id && slot.time_to)?.time_to;
            if (!max) max = Date.now();
            // nearest nearest multiple to slot duration
            return max + (scheduleOptions.slotDuration - max % scheduleOptions.slotDuration)
        })

        const slotData = _.flatten(maxDoctorsTime.map((time, ind) => {
            const res: Partial<Schedule>[] = [];
            while(new Date(time).toISOString() < endDate) {
                res.push({
                    time_from: time,
                    time_to: time + scheduleOptions.slotDuration,
                    is_free: true,
                    doctor: doctors[ind]
                })
                time += scheduleOptions.slotDuration;
            }
            return res;
        }))

        await this.dbController.schedule.createSlots(slotData);

        return {code: ResultCode.OK, result: slotData}
    }

    async takeSlot(takeSlotData: TakeSlotDto): Promise<ResponseObject<string>> {
        if (!takeSlotData.slot_id || !takeSlotData.patient_id || !takeSlotData.doctor_id)
            return {code: ResultCode.DATA_IS_INCOMPLETE};
        const slot = await this.dbController.schedule.getSlotById(takeSlotData.slot_id);

        if (!slot) {
            return {code: ResultCode.SLOT_NOT_FOUND};
        } else if (!slot.is_free) {
            return {code: ResultCode.SLOT_NOT_FREE};
        } else if (slot.time_from > Date.now()) {
            return {code: ResultCode.SLOT_EXPIRED};
        }

        await this.dbController.schedule.takeSlot(takeSlotData);

        return {code: ResultCode.OK}
    }
}

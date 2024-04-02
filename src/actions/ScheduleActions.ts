import {IDBController} from "@/actions/interfaces/IDBController";
import {ResponseObject} from "@/types/RequestTypes";
import ResultCode from "@/types/ResultCode";
import {ScheduleOptions} from "@/actions/interfaces/ScheduleOptions";
import {TakeSlotDto} from "@/dtos/take-slot.dto";
import {GetScheduleDto} from "@/dtos/get-schedule.dto";
import {Schedule} from "@/typeorm/entities/Schedule";

export class ScheduleActions {
    constructor(private dbController: IDBController) {
    }

    async getSchedule(getScheduleData: GetScheduleDto): Promise<ResponseObject<Schedule[]>> {
        // TODO: add logic to get schedule
        return {code: ResultCode.OK, result: []}
    }

    async createScheduleSlots(start: number, end: number, scheduleOptions: ScheduleOptions):
        Promise<ResponseObject<void>> {
        // TODO: add logic to create slots
        return {code: ResultCode.OK}
    }

    async takeSlot(takeSlotData: TakeSlotDto): Promise<ResponseObject<string>> {
        // TODO: add logic to make slot not free
        return {code: ResultCode.OK}
    }
}

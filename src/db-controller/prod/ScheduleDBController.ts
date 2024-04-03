import {IScheduleDBController} from "@/actions/interfaces/IScheduleDBController";
import {AppDataSource} from "@/typeorm";
import {Schedule} from "@/typeorm/entities/Schedule";
import {TakeSlotDto} from "@/dtos/take-slot.dto";
import {GetScheduleDto} from "@/dtos/get-schedule.dto";
import {Equal} from "typeorm";
import {Doctor} from "@/typeorm/entities/Doctor";
import {Patient} from "@/typeorm/entities/Patient";
import {ScheduleDto} from "@/dtos/schedule.dto";

export class ScheduleDBController implements IScheduleDBController {
    private scheduleRepo = AppDataSource.getRepository(Schedule);

    async getSlotById(id: string): Promise<Schedule | null> {
        return await this.scheduleRepo.findOne({where: {id: Equal(id)}})
    }

    async takeSlot(takeSlotData: TakeSlotDto): Promise<void> {
        const doctor = new Doctor(); doctor.id = takeSlotData.doctor_id;
        const patient = new Patient(); patient.id = takeSlotData.patient_id;

        await this.scheduleRepo.update({id: Equal(takeSlotData.slot_id)}, {
            is_free: false,
            doctor: doctor,
            patient: patient
        })
    }

    async getSchedule(getScheduleData: GetScheduleDto): Promise<ScheduleDto[] | null> {
        const rawSchedule = await this.scheduleRepo.find({
            select: ["id", "is_free", "time_from", "time_to"],
            relations: {
                doctor: true
            }
        });
        return rawSchedule.map(raw => ({
            id: raw.id,
            doctor_name: raw.doctor.name,
            is_free: raw.is_free,
            time_from: raw.time_from,
            time_to: raw.time_to
        }))
    }

    async getRawSchedule(): Promise<Schedule[] | null> {
        return await this.scheduleRepo.find({
            relations: {
                doctor: true,
                patient: true
            }
        });
    }

    async createSlots(slots: Schedule[]): Promise<void> {
        await this.scheduleRepo.save(slots);
    }
}

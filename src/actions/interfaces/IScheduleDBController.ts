import {TakeSlotDto} from "@/dtos/take-slot.dto";
import {Schedule} from "@/typeorm/entities/Schedule";
import {GetScheduleDto} from "@/dtos/get-schedule.dto";
import {ScheduleDto} from "@/dtos/schedule.dto";

export interface IScheduleDBController {
    takeSlot(takeSlotData: TakeSlotDto): Promise<void>

    getSlotById(id: string): Promise<Schedule | null>

    getSchedule(getScheduleData: GetScheduleDto): Promise<ScheduleDto[] | null>

    getRawSchedule(): Promise<Schedule[] | null>

    createSlots(slots: Partial<Schedule>[]): Promise<void>
}

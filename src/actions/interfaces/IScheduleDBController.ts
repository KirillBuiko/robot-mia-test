import {TakeSlotDto} from "@/dtos/take-slot.dto";
import {Schedule} from "@/typeorm/entities/Schedule";
import {GetScheduleDto} from "@/dtos/get-schedule.dto";

export interface IScheduleDBController {
    takeSlot(takeSlotData: TakeSlotDto): Promise<string | null>

    getSlotById(id: string): Promise<Schedule | null>

    getSchedule(getScheduleData: GetScheduleDto): Promise<Schedule[] | null>
}

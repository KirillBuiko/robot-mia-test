import {IScheduleDBController} from "@/actions/interfaces/IScheduleDBController";
import {AppDataSource} from "@/typeorm";
import {Schedule} from "@/typeorm/entities/Schedule";
import {TakeSlotDto} from "@/dtos/take-slot.dto";
import {GetScheduleDto} from "@/dtos/get-schedule.dto";

export class ScheduleDBController implements IScheduleDBController {
    private scheduleRepo = AppDataSource.getRepository(Schedule);

    async getSlotById(id: string): Promise<Schedule | null> {
        // TODO: implement
        return null;
    }

    async takeSlot(takeSlotData: TakeSlotDto): Promise<string | null> {
        // TODO: implement
        return null;
    }

    async getSchedule(getScheduleData: GetScheduleDto): Promise<Schedule[] | null> {
        return [];
    }
}

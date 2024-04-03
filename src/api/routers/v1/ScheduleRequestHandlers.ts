import {Request, Response, Router} from "express";
import {IDBController} from "@/actions/interfaces/IDBController";
import {RequestHandlers} from "@/api/routers/RequestHandlers";
import {ScheduleActions} from "@/actions/ScheduleActions";
import {Configs} from "@/configs";

export class ScheduleRequestHandlers extends RequestHandlers {
    private scheduleActionsHandler: ScheduleActions;

    constructor(dbController: IDBController) {
        super();
        this.scheduleActionsHandler = new ScheduleActions(dbController);
    }

    attachRouter(router: Router) {
        router.post('/take-schedule-slot', [
            this.takeSlot.bind(this)]);
        router.get('/get-schedule', [
            this.getSchedule.bind(this)]);

        router.post('/DEV_create-schedule-slots', [
            this.createScheduleSlots.bind(this)]);
    }

    async takeSlot(req: Request, res: Response) {
        const response = await this.scheduleActionsHandler.takeSlot(req.body);
        this.handleRequestResult(response, res);
    }

    async getSchedule(req: Request, res: Response) {
        const response = await this.scheduleActionsHandler.getSchedule(req.body);
        this.handleRequestResult(response, res);
    }

    async createScheduleSlots(req: Request, res: Response) {
        const response = await this.scheduleActionsHandler.createScheduleSlots(Configs.SCHEDULE_OPTIONS, req.body.endDate);
        this.handleRequestResult(response, res);
    }
}

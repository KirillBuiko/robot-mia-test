import {Request, Response, Router} from "express";
import {IDBController} from "@/actions/interfaces/IDBController";
import {RequestHandlers} from "@/api/routers/RequestHandlers";
import {RegistrationDto} from "@/dtos/registration.dto";
import {ScheduleActions} from "@/actions/ScheduleActions";

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
    }

    async takeSlot(req: Request<RegistrationDto>, res: Response) {
        const response = await this.scheduleActionsHandler.takeSlot(req.body);
        this.handleRequestResult(response, res);
    }

    async getSchedule(req: Request<RegistrationDto>, res: Response) {
        const response = await this.scheduleActionsHandler.getSchedule(req.body);
        this.handleRequestResult(response, res);
    }
}

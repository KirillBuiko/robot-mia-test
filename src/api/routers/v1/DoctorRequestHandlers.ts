import {Request, Response, Router} from "express";
import {IDBController} from "@/actions/interfaces/IDBController";
import {RequestHandlers} from "@/api/routers/RequestHandlers";
import {DoctorActions} from "@/actions/DoctorActions";
import {CreateDoctorDto} from "@/dtos/create-doctor.dto";

export class DoctorRequestHandlers extends RequestHandlers {
    private readonly doctorActionsHandler: DoctorActions;

    constructor(dbController: IDBController) {
        super();
        this.doctorActionsHandler = new DoctorActions(dbController);
    }

    attachRouter(router: Router) {
        router.post('/create-doctor', [
            this.createDoctor.bind(this)])
        router.get('/get-doctors', [
            this.getDoctors.bind(this)])
    }

    async createDoctor(req: Request<CreateDoctorDto>, res: Response) {
        const response = await this.doctorActionsHandler.createDoctor(req.body);
        this.handleRequestResult(response, res);
    }

    async getDoctors(req: Request<CreateDoctorDto>, res: Response) {
        const response = await this.doctorActionsHandler.getDoctors();
        this.handleRequestResult(response, res);
    }
}

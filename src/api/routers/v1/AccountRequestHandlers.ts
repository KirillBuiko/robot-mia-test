import {Request, Response, Router} from "express";
import {AccountActions} from "@/actions/AccountActions"
import {IDBController} from "@/actions/interfaces/IDBController";
import {RequestHandlers} from "@/api/routers/RequestHandlers";
import {RegistrationDto} from "@/dtos/registration.dto";

export class AccountRequestHandlers extends RequestHandlers {
    private readonly accountActionsHandler: AccountActions;

    constructor(dbController: IDBController) {
        super();
        this.accountActionsHandler = new AccountActions(dbController);
    }

    attachRouter(router: Router) {
        router.post('/registration', [
            this.registration.bind(this)])
    }

    async registration(req: Request<RegistrationDto>, res: Response) {
        const response = await this.accountActionsHandler.registration(req.body);
        this.handleRequestResult(response, res);
    }
}

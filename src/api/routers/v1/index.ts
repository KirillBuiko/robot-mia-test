import {IDBController} from "@/actions/interfaces/IDBController";
import express from "express";
import {AccountRequestHandlers} from "@/api/routers/v1/AccountRequestHandlers";
import {ScheduleRequestHandlers} from "@/api/routers/v1/ScheduleRequestHandlers";
import {DoctorRequestHandlers} from "@/api/routers/v1/DoctorRequestHandlers";

export function getV1Router(dbController: IDBController) {
    const router = express.Router();

    const requestHandlers =
    [
        new AccountRequestHandlers(dbController),
        new ScheduleRequestHandlers(dbController),
        new DoctorRequestHandlers(dbController)
    ]
    requestHandlers.forEach(handlers => handlers.attachRouter(router));

    return router;
}

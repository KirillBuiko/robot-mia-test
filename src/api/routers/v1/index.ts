import {IDBController} from "@/actions/interfaces/IDBController";
import express from "express";
import {AccountRequestHandlers} from "@/api/routers/v1/AccountRequestHandlers";
import {ScheduleRequestHandlers} from "@/api/routers/v1/ScheduleRequestHandlers";

export function getV1Router(dbController: IDBController) {
    const router = express.Router();

    const requestHandlers =
    [
        new AccountRequestHandlers(dbController),
        new ScheduleRequestHandlers(dbController)
    ]
    requestHandlers.forEach(handlers => handlers.attachRouter(router));

    return router;
}

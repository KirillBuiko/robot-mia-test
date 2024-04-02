import {IDBController} from "@/actions/interfaces/IDBController";
import express from "express";
import {Configs} from "@/configs";
import {getV1Router} from "./v1";

export function getCoreRouter(dbController: IDBController) {
    const router = express.Router();

    router.use(Configs.REQUEST_PREFIX + "/v1", getV1Router(dbController));

    const requestHandlers = []
    requestHandlers.forEach(handlers => handlers.attachRouter(router));

    return router;
}

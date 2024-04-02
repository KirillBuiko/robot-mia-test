import {NextFunction, Response, Router} from "express";
import {ResponseObject} from "@/types/RequestTypes";
import ResultCode, {ResultCodeDescription} from "@/types/ResultCode";

export abstract class RequestHandlers {
    abstract attachRouter(router: Router): void;

    protected handleRequestResult<T, R>(response: ResponseObject<T>, res: Response, next?: NextFunction) {
        const responseObject = {...response, description: ResultCodeDescription[response.code]};
        if (response.code != ResultCode.OK) {
            res.json(responseObject);
            return;
        }
        next ? next() : res.json(responseObject);
    }
}

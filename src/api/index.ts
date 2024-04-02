import express from 'express';
import {IDBController} from "@/actions/interfaces/IDBController";
import {getCoreRouter} from "@/api/routers";

export default function getExpress(dbController: IDBController){
    const ex = express()

// MIDDLEWARES
    ex.use(express.json())

// ROUTERS
    ex.use(getCoreRouter(dbController));

    return ex;
}

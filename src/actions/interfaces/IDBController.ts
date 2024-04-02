import {IDoctorsDBController} from "@/actions/interfaces/IDoctorsDBController";
import {IPatientsDBController} from "@/actions/interfaces/IPatientsDBController";
import {IScheduleDBController} from "@/actions/interfaces/IScheduleDBController";

export interface IDBController {
    doctor: IDoctorsDBController,
    patient: IPatientsDBController,
    schedule: IScheduleDBController
}

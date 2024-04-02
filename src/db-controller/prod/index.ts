import {IDBController} from "@/actions/interfaces/IDBController";
import {DoctorDBController} from "@/db-controller/prod/DoctorDBController";
import {PatientDBController} from "@/db-controller/prod/PatientDBController";
import {ScheduleDBController} from "@/db-controller/prod/ScheduleDBController";

export const prodDBController: IDBController = {
    patient: new PatientDBController(),
    doctor: new DoctorDBController(),
    schedule: new ScheduleDBController()
}

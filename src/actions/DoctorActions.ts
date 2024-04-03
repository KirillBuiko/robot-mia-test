import {IDBController} from "@/actions/interfaces/IDBController";
import {ResponseObject} from "@/types/RequestTypes";
import ResultCode from "@/types/ResultCode";
import {CreateDoctorDto} from "@/dtos/create-doctor.dto";
import {Doctor} from "@/typeorm/entities/Doctor";

export class DoctorActions {
    constructor(private dbController: IDBController) {
    }

    async createDoctor(createData: CreateDoctorDto): Promise<ResponseObject<string>> {
        if (!createData.name) return {code: ResultCode.DATA_IS_INCOMPLETE};
        // TODO: check if name and spec is uniq

        await this.dbController.doctor.saveNewDoctor(createData);
        return {code: ResultCode.OK}
    }

    async getDoctors(): Promise<ResponseObject<Doctor[]>> {
        return {code: ResultCode.OK, result: await this.dbController.doctor.getDoctors()}
    }
}

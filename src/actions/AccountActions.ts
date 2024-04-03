import {IDBController} from "@/actions/interfaces/IDBController";
import {RegistrationDto} from "@/dtos/registration.dto";
import {ResponseObject} from "@/types/RequestTypes";
import ResultCode from "@/types/ResultCode";

export class AccountActions {
    constructor(private dbController: IDBController) {
    }

    async registration(regData: RegistrationDto): Promise<ResponseObject<string>> {
        if (!regData.email || !regData.phone) return {code: ResultCode.DATA_IS_INCOMPLETE};
        if (await this.dbController.patient.getPatientIdByEmailOrPhone(regData.email, regData.phone) != null)
            return {code: ResultCode.EMAIL_OR_PHONE_IS_BUSY}

        const id = await this.dbController.patient.saveNewPatient(regData);
        return {code: ResultCode.OK, result: id}
    }
}

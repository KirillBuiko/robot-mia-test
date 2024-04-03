import {RegistrationDto} from "@/dtos/registration.dto";

export interface IPatientsDBController {
    getPatientIdByEmailOrPhone(email: string, phone: string): Promise<string | null>,

    saveNewPatient(regData: RegistrationDto): Promise<string | null>,
}

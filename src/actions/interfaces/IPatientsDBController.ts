import {RegistrationDto} from "@/dtos/registration.dto";

export interface IPatientsDBController {
    getUserIdByEmailOrPhone(email: string, phone: string): Promise<string | null>,

    saveNewUser(regData: RegistrationDto): Promise<string | null>,
}

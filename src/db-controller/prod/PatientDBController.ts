import {IPatientsDBController} from "@/actions/interfaces/IPatientsDBController";
import {AppDataSource} from "@/typeorm";
import {Patient} from "@/typeorm/entities/Patient";
import {RegistrationDto} from "@/dtos/registration.dto";
import {Equal} from "typeorm";

export class PatientDBController implements IPatientsDBController {
    private patientRepo = AppDataSource.getRepository(Patient);

    async getPatientIdByEmailOrPhone(email: string, phone: string): Promise<string | null> {
        const patient = await this.patientRepo.findOneBy([{email: Equal(email)}, {phone: Equal(phone)}]);
        return patient && patient.id;
    }

    async saveNewPatient(regData: RegistrationDto): Promise<string | null> {
        const patient = await this.patientRepo.save(regData);
        return patient.id;
    }
}

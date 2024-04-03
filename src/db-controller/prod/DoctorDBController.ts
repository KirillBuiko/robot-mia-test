import {IDoctorsDBController} from "@/actions/interfaces/IDoctorsDBController";
import {AppDataSource} from "@/typeorm";
import {Doctor} from "@/typeorm/entities/Doctor";
import {CreateDoctorDto} from "@/dtos/create-doctor.dto";
import {Equal} from "typeorm";

export class DoctorDBController implements IDoctorsDBController {
    private doctorRepo = AppDataSource.getRepository(Doctor);

    async getDoctors(): Promise<Doctor[]> {
        return await this.doctorRepo.find();
    }

    async getDoctorIdByName(name: string): Promise<string | null> {
        const patient = await this.doctorRepo.findOneBy({name: Equal(name)});
        return patient && patient.id;
    }

    async saveNewDoctor(createData: CreateDoctorDto) {
        const doctor = await this.doctorRepo.save(createData);
        return doctor.id;
    }
}

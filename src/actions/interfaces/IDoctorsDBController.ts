import {CreateDoctorDto} from "@/dtos/create-doctor.dto";
import {Doctor} from "@/typeorm/entities/Doctor";

export interface IDoctorsDBController {
    getDoctors(): Promise<Doctor[]>

    getDoctorIdByName(name: string): Promise<string | null>;

    saveNewDoctor(createData: CreateDoctorDto): Promise<string | null>;
}

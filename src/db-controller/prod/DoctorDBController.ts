import {IDoctorsDBController} from "@/actions/interfaces/IDoctorsDBController";
import {AppDataSource} from "@/typeorm";
import {Doctor} from "@/typeorm/entities/Doctor";

export class DoctorDBController implements IDoctorsDBController {
    private doctorRepo = AppDataSource.getRepository(Doctor);

    // TODO: make doctor controller?
}

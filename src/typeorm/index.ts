import "reflect-metadata"
import {DataSource} from "typeorm"
import {Patient} from "@/typeorm/entities/Patient";
import {Doctor} from "@/typeorm/entities/Doctor";
import {Schedule} from "@/typeorm/entities/Schedule";

export const AppDataSource = new DataSource({
    type :"sqlite",
    database: "tempDB.db",
    synchronize: true,
    logging: true,
    entities: [Patient, Doctor, Schedule]
})

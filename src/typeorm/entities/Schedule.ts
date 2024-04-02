import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm"
import {Doctor} from "@/typeorm/entities/Doctor";
import {Patient} from "@/typeorm/entities/Patient";

@Entity("schedule")
export class Schedule {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => Doctor, (doctor) => doctor.id)
    doctor_id: string

    @ManyToOne(() => Patient, (patient) => patient.id)
    patient_id: string

    @Column("int")
    time_from: number

    @Column("int")
    time_to: number

    @Column({
        type: "boolean",
        default: false
    })
    is_free: number

    @Column({
        type: "int",
        default: false
    })
    type: AppointmentType
}

export enum AppointmentType {
    FIRST=0,
    REPEAT=1
}

import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm"
import {Doctor} from "@/typeorm/entities/Doctor";
import {Patient} from "@/typeorm/entities/Patient";

@Entity("schedule")
export class Schedule {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => Doctor, (doctor) => doctor.id)
    doctor: Doctor

    @ManyToOne(() => Patient, (patient) => patient.id, {
        nullable: true
    })
    patient: Patient

    @Column("int")
    time_from: number

    @Column("int")
    time_to: number

    @Column({
        type: "boolean",
        default: false
    })
    is_free: boolean

    @Column({
        type: "int",
        nullable: true
    })
    type: AppointmentType
}

export enum AppointmentType {
    FIRST=0,
    REPEAT=1
}

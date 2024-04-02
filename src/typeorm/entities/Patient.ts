import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity("patients")
export class Patient {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("text")
    phone: string

    @Column("text")
    name: string

    @Column("text")
    email: string

    @Column("text")
    gender: Gender
}

export enum Gender {
    MALE = "male",
    FEMALE = "female"
}

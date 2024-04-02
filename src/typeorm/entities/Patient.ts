import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity("patients")
export class Patient {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("text")
    phone: string

    @Column({type: "text", default: "Jane"})
    name: string

    @Column("text")
    email: string

    @Column({type: "text", default: "male"})
    gender: Gender
}

export enum Gender {
    MALE = "male",
    FEMALE = "female"
}

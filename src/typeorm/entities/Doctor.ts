import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity("doctors")
export class Doctor {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("text")
    name: string

    @Column("text")
    spec: string

    @Column("int")
    price: number
}

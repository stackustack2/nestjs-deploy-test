import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Entry extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    entry: string;
}
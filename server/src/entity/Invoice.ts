import { Column, CreateDateColumn, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invoice {

    @PrimaryGeneratedColumn()
    id: string;

    @CreateDateColumn()
    createdDate: Date;

    @Column()
    isPublished: boolean;

    @Column()
    paymentTerms: string;

    @Column('text')
    projectDescription: string;

}
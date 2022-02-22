import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    todo: string;

    @Column({ default: false })
    published: boolean;

    @CreateDateColumn()
    createdAt: Date;
}

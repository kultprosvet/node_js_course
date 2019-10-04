import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { UserEntity } from '../Lesson_1/UserEntity'
@Entity('deceases')
export class DeceaseEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string

    @ManyToOne(type => UserEntity, { onDelete: 'CASCADE' })
    @JoinColumn()
    user: UserEntity
    @Column({ type: 'int', nullable: true })
    userId: number
}

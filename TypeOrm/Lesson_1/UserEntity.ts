import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('users')
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    lastName: string
    @Column()
    firsName: string
    @Column({ type: 'date' })
    birthDay: Date
    @Column()
    isActive: boolean
    @Column({ type: 'text', nullable: true })
    bio: string
    @Column({ type: 'int' })
    expirience: number
    @Column({ type: 'enum', enum: ['male', 'female'] })
    gender: string
}

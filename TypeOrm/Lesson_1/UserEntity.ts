import {
    BaseEntity,
    Column,
    Entity,
    Index,
    PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('users')
@Index(['expirience', 'gender'])
@Index(['lastName', 'firsName', 'bio'], { fulltext: true })
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    @Index()
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

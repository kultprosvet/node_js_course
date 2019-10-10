import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    Index,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    VersionColumn,
} from 'typeorm'
import { DeceaseEntity } from '../Lesson_2/DeceaseEntity'
import { GroupEntity } from '../Lesson_3/GroupEntity'

@Entity('users')
@Index(['expirience', 'gender'])
@Index(['lastName', 'firsName', 'bio'], { fulltext: true })
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Index()
    username: string

    @Column()
    password: string

    @Column()
    @Index()
    lastName: string
    @Column()
    firsName: string
    @Column({ type: 'date', nullable: true })
    birthDay: Date
    @Column({ default: true })
    isActive: boolean
    @Column({ type: 'text', nullable: true })
    bio: string
    @Column({ type: 'int', nullable: true })
    expirience: number
    @Column({
        type: 'enum',
        enum: ['male', 'female'],
        nullable: true,
    })
    gender: string

    @OneToMany(type => DeceaseEntity, d => d.user, {
        cascade: ['insert', 'update'],
    })
    deceases: DeceaseEntity[]

    @ManyToMany(type => GroupEntity, group => group.users)
    groups: GroupEntity[]

    @CreateDateColumn()
    createdAt: Date
    @UpdateDateColumn()
    updatedAt: Date
    @VersionColumn()
    version: number
}

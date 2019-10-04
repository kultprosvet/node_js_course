import {
    BaseEntity,
    Column,
    Entity,
    Index,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { UserEntity } from '../Lesson_1/UserEntity'
@Entity('groups')
export class GroupEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    @Index({ unique: true })
    name: string

    @ManyToMany(type => UserEntity, user => user.groups)
    @JoinTable({ name: 'groups_users_users' })
    users: UserEntity[]
}

import {
    BaseEntity,
    Column,
    Entity,
    Index,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { Location } from '../../drafts/lesson4/Location'

@Entity('points')
export class PointEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column({
        type: 'point',
    })
    @Index({ spatial: true })
    location: string
    @Column()
    name: string
}

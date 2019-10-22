import {
    Field,
    InputType,
    Int,
    ObjectType,
} from 'type-graphql'
import { GroupGQL } from './Group'
import { DeceaseGQL } from './Decease'

@ObjectType('User')
export class UserGQL {
    @Field(type => Int)
    id: number
    @Field()
    username: string
    @Field()
    lastName: string
    @Field()
    firsName: string
    @Field({
        nullable: true,
        description: 'Returned only after login or sign up',
    })
    token: string
    @Field(type => [GroupGQL], { nullable: true })
    groups: GroupGQL[]
    @Field(type => [DeceaseGQL], { nullable: true })
    deceases: DeceaseGQL[]
}

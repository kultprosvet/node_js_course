import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType('Group')
export class GroupGQL {
    @Field(type => Int)
    id: number
    @Field()
    name: string
}

import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType('Decease')
export class DeceaseGQL {
    @Field(type => Int)
    id: number
    @Field()
    name: string
}

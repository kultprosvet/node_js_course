import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class ExchangeRate {
    @Field()
    code: string
    @Field()
    rate: number
}

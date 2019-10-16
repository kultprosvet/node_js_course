import { Field, ObjectType } from 'type-graphql'

@ObjectType('Author')
export class AuthorGQL {
    @Field()
    lastName: string
    @Field()
    firstName: string
}

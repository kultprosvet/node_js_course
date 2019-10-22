import { Field, InputType } from 'type-graphql'

@InputType('UserInput')
export class UserInputGQL {
    @Field()
    username: string
    @Field()
    lastName: string
    @Field()
    firstName: string
    @Field()
    password: string
}

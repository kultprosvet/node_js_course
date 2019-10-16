import { Field, Float, Int, ObjectType } from 'type-graphql'
import { AuthorGQL } from './Author'

@ObjectType('Book')
export class BookGQL {
    @Field()
    title: string
    @Field(type => Int)
    pages: number
    @Field(type => Float, { nullable: true })
    weight: number
    @Field(type => AuthorGQL, { nullable: true })
    author: AuthorGQL
}

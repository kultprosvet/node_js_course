import 'reflect-metadata'
import {
    FieldResolver,
    Query,
    Resolver,
    Root,
} from 'type-graphql'
import { BookGQL } from '../types/Book'
import { authors, books } from '../serverTypeGQL'
import { AuthorGQL } from '../types/Author'

@Resolver(of => BookGQL)
export class BookResolver {
    @Query(returns => [BookGQL])
    books() {
        return books
    }
    @FieldResolver(type => AuthorGQL)
    author(@Root() book: BookGQL) {
        console.log(book)
        return { lastName: '11', firstName: '11' }
    }
}

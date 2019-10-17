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
    author(@Root() book: any) {
        console.log(book)
        return authors[book.author]
    }
}

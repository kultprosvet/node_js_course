import { ApolloServer, gql } from 'apollo-server'

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    # This "Book" type defines the queryable fields for every book in our data source.
    type Book {
        "Book title"
        title: String
        pages: Int
        weight: Float
        author: Author
    }
    input BookInput {
        title: String!
        pages: Int!
        weight: Float!
        author: Int
    }
    type Author {
        lastName: String
        firstName: String
    }
    input AuthorInput {
        lastName: String!
        firstName: String!
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
        books: [Book]
        authors: [Author]
    }
    type Mutation {
        addBook(book: BookInput): Book
    }
`
const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 1,
        pages: 500,
        weight: 1.1,
    },
    {
        title: 'Jurassic Park',
        author: 2,
        pages: 300,
        weight: 0.9,
    },
]
const authors = {
    1: {
        firstName: 'J.K.',
        lastName: 'Rowling',
    },
    2: {
        firstName: 'Michael',
        lastName: 'Crichton',
    },
}
const resolvers = {
    Query: {
        books: () => books,
        authors: () => {
            const out = []
            for (let p in authors) {
                out.push(authors[p])
            }
            return out
        },
    },
    Mutation: {
        addBook: (root, args) => {
            books.push(args.book)
            return args.book
        },
    },
    Book: {
        author: root => {
            return authors[root.author]
        },
    },
}
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})

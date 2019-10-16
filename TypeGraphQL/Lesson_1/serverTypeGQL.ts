import 'reflect-metadata'
import { ApolloServer, gql } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { BookResolver } from './resolvers/BookResolver'
export const books = [
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
    {
        title: 'Jurassic Park 2',
        author: 2,
        pages: 300,
    },
]
export const authors: any = {
    1: {
        firstName: 'J.K.',
        lastName: 'Rowling',
    },
    2: {
        firstName: 'Michael',
        lastName: 'Crichton',
    },
}
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
async function startServer() {
    const schema = await buildSchema({
        resolvers: [BookResolver],
    })
    const server = new ApolloServer({
        schema,
        playground: true,
    })
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`)
    })
}
startServer().catch(e => {
    console.log(e)
})
// The `listen` method launches a web server.

import 'reflect-metadata'
import { ApolloServer, gql } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import {
    createConnection,
    createConnections,
} from 'typeorm'
import { UserResolver } from './resolvers/UserResolver'
import { authChecker } from './authChecker'
import { SECRET } from '../../Express/Lesson_2/config'
import * as jwt from 'jsonwebtoken'
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
async function startServer() {
    await createConnection()
    const schema = await buildSchema({
        resolvers: [UserResolver],
        authChecker,
    })
    const server = new ApolloServer({
        schema,
        playground: true,
        context: (session: any) => {
            let user = null
            let token = session.req.headers.authorization
            if (token) {
                token = token.slice(7, token.length)
                if (jwt.verify(token, SECRET)) {
                    const data = jwt.decode(token)
                    user = data.data
                }
            }
            return { user, session }
        },
    })
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`)
    })
}
startServer().catch(e => {
    console.log(e)
})
// The `listen` method launches a web server.

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
import { ExchangeRateResolver } from './resolvers/ExchangeRateResolver'
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
async function startServer() {
    await createConnection()
    const schema = await buildSchema({
        resolvers: [UserResolver, ExchangeRateResolver],
        authChecker,
    })
    const server = new ApolloServer({
        schema,
        playground: true,
        cors: true,
        context: (session: any) => {
            let token
            if (session.connection) {
                token =
                    session.connection.context.Authorization
            } else if (session.req) {
                token = session.req.headers.authorization
            }
            let user = null
            if (token) {
                token = token.slice(7, token.length)
                if (jwt.verify(token, SECRET)) {
                    const data = jwt.decode(token)
                    user = data.data
                }
            }
            return { user, session }
        },
        subscriptions: {
            onConnect: (connectionParams, socket) => {
                return connectionParams
            },
            onDisconnect: () => {
                console.log('Disconnected.')
            },
        },
    })
    server.listen().then(({ url, subscriptionsUrl }) => {
        console.log(`🚀 Server ready at ${url}`)
        console.log(
            `🚀 Subscriptions ready at ${subscriptionsUrl}`,
        )
    })
}
startServer().catch(e => {
    console.log(e)
})
// The `listen` method launches a web server.

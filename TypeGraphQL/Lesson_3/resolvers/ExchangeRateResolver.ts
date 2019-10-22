import {
    Arg,
    Mutation,
    PubSub,
    Resolver,
    Root,
    Subscription,
} from 'type-graphql'
import { ExchangeRate } from '../types/ExchangeRate'
import { Response } from '../types/Response'
import { PubSubEngine } from 'graphql-subscriptions'
function sleep(ms: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

@Resolver()
export class ExchangeRateResolver {
    @Subscription({
        topics: 'EXCHANGE',
        filter: ({ payload, args }) =>
            !args.code || args.code == payload.code,
    })
    exchangeRate(
        @Root() data: any,
        @Arg('code', { nullable: true }) code: string,
    ): ExchangeRate {
        return data
    }
    @Mutation(returns => Response)
    async generateRates(@PubSub() pubSub: PubSubEngine) {
        for (let i = 0; i < 100; i++) {
            await pubSub.publish('EXCHANGE', {
                code: 'USD',
                rate: 25 + Math.random(),
            })
            await pubSub.publish('EXCHANGE', {
                code: 'EUR',
                rate: 27 + Math.random(),
            })
            await sleep(1000)
        }
        return {
            message: 'OK',
        }
    }
}

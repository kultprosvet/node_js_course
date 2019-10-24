import { WebSocketLink } from 'apollo-link-ws'

import { HttpLink } from 'apollo-link-http'
import { getMainDefinition } from 'apollo-utilities';
import {  split } from 'apollo-link'
import { execute, makePromise } from 'apollo-link';
export class GQLClient{
    link=null
    constructor(host,token){
        const httpLink = new HttpLink({
            uri: `http://${host}/graphql`,
            headers: token &&  {Authorization: `Bearer ${token}`}
        });

        const wsLink = new WebSocketLink({
            uri: `ws://${host}/graphql`,
            options : {
                timeout: 60000,
                reconnect: true,
                connectionParams: {
                    Authorization: token && `Bearer ${token}`,
                },
            },

        });
        this.link= split(
            // split based on operation type
            ({ query }) => {
                const { kind, operation } = getMainDefinition(query);
                return kind === 'OperationDefinition' && operation === 'subscription';
            },
            wsLink,
            httpLink,
        );
    }

    request(query,variables){
        const operation = {
            query,
            variables: variables || {}
        };
        return makePromise(execute(this.link, operation))
    }
    subscribe(query,variables,handler){
        const operation = {
            query,
            variables: variables || {}
        };
        return execute(this.link, operation).subscribe(handler)
    }
}



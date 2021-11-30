import WebSocket from 'isomorphic-ws';
import {split, HttpLink, ApolloClient, InMemoryCache, ApolloLink, gql} from '@apollo/client';
import {getMainDefinition} from '@apollo/client/utilities';
import {WebSocketLink} from '@apollo/client/link/ws';


const wsLink = new WebSocketLink({
    uri: 'wss://gql-ws.mainnet.desmos.network/v1/graphql',
    options: {
        reconnect: true
    },
    webSocketImpl: WebSocket,
})

const httpLink = new HttpLink({
    uri: 'https://gql.mainnet.desmos.network/v1/graphql'
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    link: ApolloLink.from([splitLink]),
    cache: new InMemoryCache(),
})


const PROFILES_SUBSCRIPTION = gql`
    subscription ProfilesCount {
      profile_aggregate {
        aggregate {
          count
        }
      }
    }
`;

const LINKS_SUBSCRIPTION = gql`
    subscription ChainLinksCount {
      chain_link_aggregate {
        aggregate {
          count
        }
      }
    }
`;

export {client, PROFILES_SUBSCRIPTION, LINKS_SUBSCRIPTION};
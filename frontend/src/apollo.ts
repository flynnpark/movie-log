import ApolloClient, { Operation, InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  clientState: {
    defaults: {
      auth: {
        __typename: 'Auth',
        isLoggedIn: Boolean(localStorage.getItem('jwt'))
      }
    },
    resolvers: {
      Mutation: {
        userLogIn: (_, { token }, { cache: appCache }) => {
          localStorage.setItem('jwt', token);
          appCache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: true
              }
            }
          });
          return null;
        },
        userLogOut: (_, __, { appCache }) => {
          localStorage.removeItem('jwt');
          appCache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: false
              }
            }
          });
          return null;
        }
      }
    }
  },
  request: async (operation: Operation) => {
    operation.setContext({
      headers: {
        'X-JWT': localStorage.getItem('jwt') || ''
      }
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    console.log(graphQLErrors);
    if (graphQLErrors) {
      graphQLErrors.map(({ message }) => {
        console.log(`Unexpected error: ${message}`);
        if (message === 'Unauthorized') {
          localStorage.removeItem('jwt');
          cache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: false
              }
            }
          });
        }
      });
    }
    if (networkError) {
      console.log(`Unexpected error: ${networkError}`);
    }
  },
  uri: 'http://localhost:4000/graphql'
});

export default client;

import ApolloClient, { InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache();

const client = new ApolloClient({
  clientState: {
    cache,
    defaults: {
      auth: {
        __typename: 'Auth',
        isLoggedIn: Boolean(localStorage.getItem('jwt')) || false,
      },
    },
    resolvers: {
      Mutation: {
        userLogIn: (_, { token }, { cache: localCache }) => {
          localStorage.setItem('jwt', token);
          localCache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: true,
              },
            },
          });
          return null;
        },
      },
    },
  },
  uri: 'http://localhost:3000/',
});

export default client;

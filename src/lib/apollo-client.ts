// src/lib/apollo-client.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.example.com/graphql', // Remplace par l'URL de ton endpoint GraphQL
  cache: new InMemoryCache(),
});

export default client;

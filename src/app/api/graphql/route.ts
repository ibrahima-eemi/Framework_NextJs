import { createYoga } from 'graphql-yoga';
import { createSchema } from 'graphql-yoga';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Connexion Prisma

// Schéma GraphQL
const typeDefs = `
  type Response {
    id: Int
    name: String
    email: String
    message: String
    createdAt: String
  }

  type Query {
    responses: [Response]
  }

  type Mutation {
    addResponse(name: String!, email: String!, message: String!): Response
  }
`;

// Résolveurs pour traiter les requêtes GraphQL
const resolvers = {
  Query: {
    responses: async () => {
      return await prisma.response.findMany();
    },
  },
  Mutation: {
    addResponse: async (_: any, { name, email, message }: { name: string, email: string, message: string }) => {
      if (!name || !email || !message) {
        throw new Error('Tous les champs sont requis');
      }

      const newResponse = await prisma.response.create({
        data: {
          name,
          email,
          message,
        },
      });

      return newResponse;
    },
  },
};

// Créer le schéma GraphQL
const schema = createSchema({
  typeDefs,
  resolvers,
});

// Initialiser Yoga avec le schéma
const yoga = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
});

// Handler pour les requêtes `GET` et `POST`
export async function GET(request: Request) {
  return yoga.handleNodeRequest(request);
}

export async function POST(request: Request) {
  return yoga.handleNodeRequest(request);
}

import express, { Express } from 'express';
import { buildBackendSchema } from './schema';
import { ApolloServer } from '@apollo/server';
import cors from "cors"
import { expressMiddleware } from '@apollo/server/express4';

/**
 * This function starts a GraphQL server with Apollo Server. on the route "/graphql"
 *
 * @param {Express} app - The Express app instance.
 *
 * @returns {Promise<void>}
 */
export const startGraphQLServer = async (app:Express) => {
  const schema = await buildBackendSchema();
  const sever = new ApolloServer({
    introspection: true,
    schema,
    csrfPrevention: true,
  })

  await sever.start();
  app.use("/graphql", cors<cors.CorsRequest>(), express.json(), expressMiddleware(sever))
}

import * as functions from "firebase-functions";
import express from "express";
import {ApolloServer} from "apollo-server-express";

import {typeDefs} from "./schema/schema";
import {resolvers} from "./resolvers/resolvers";

const app = express();

/**
 * Create Apollo Server
 */
async function main():Promise<void> {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        introspection: process.env.NODE_ENV !== 'production',
    });
    await server.start()
    server.applyMiddleware({
        app,
        path: "/",
        cors: true
    });
}

main()

export const graphql = functions.https.onRequest(app);

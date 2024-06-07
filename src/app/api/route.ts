import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../../../prisma/db";
import { typeDefs } from "../../../graphql/schema";
import { resolvers } from "../../../graphql/resolvers";

export type Context = {
	prisma: PrismaClient;
};

//const apolloServer = new ApolloServer<Context>({ typeDefs, resolvers });

/* const typeDefs = `#graphql

     type Property {
        id: ID!
        name: String
        description: String
        price: Float
        bedroom: Int
        area: Int
        category: String
        createdAt: String
        updatedAt: String 
     }

     type Query {
        property(id: ID!): Property
        properties: [Property]
     }
`;

const resolvers = {
    Query: {
        properties: async (parent, args, context) => {
            return await context.prisma.property.findMany();
        },
        property: async (parent, args, context) => {
            return await context.prisma.property.findUnique({
                where: {
                    id: args.id
                }
            });
        }
    }
} */

const apolloServer = new ApolloServer<Context>({ resolvers, typeDefs, });

/*export default startServerAndCreateNextHandler(apolloServer, {
	context: async (req, res) => ({ req, res, prisma }),
});*/

const handler = startServerAndCreateNextHandler(apolloServer, {
    context: async (req, res) => ({ req, res, prisma }),
});

export { handler as GET, handler as POST };
export const dynamic = 'force-dynamic';
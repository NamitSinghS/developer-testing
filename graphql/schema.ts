//import { gql } from '@apollo/client';

export const typeDefs = `#graphql
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
    properties(
      category: String
      minPrice: Float
      maxPrice: Float
      bedroom: Int
      minArea: Float
      maxArea: Float
    ): [Property]
 }
`;
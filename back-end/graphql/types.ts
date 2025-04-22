import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

export const testSchema = buildSchema(`
  type Users {
    id: ID!
    userName: String!
    firstName: String!
    secondNaem: String!
    email: String!
  }
  type Query {
    hello: String!,
    usersData: [Users!]!
  }
    `);

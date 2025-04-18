import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

export const testSchema = buildSchema(`
type Users {
  id: ID!
  firstName: String!
  secondName: String!
  userName: String!
  tel: Int!
  email: String!
}

type Query {
  userdata: [Users!]!
  hello: String!
}

    `);

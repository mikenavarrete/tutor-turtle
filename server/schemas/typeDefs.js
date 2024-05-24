const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    id:ID!
    email:String!
    password: String!
}

type Tutor {
    id: ID!
    email: String!
    password: String!
}

type Query {
    user(id: ID!): User
    tutor(id: ID!): Tutor
}

type Mutation {
    createUser(email: String!, password: String!): User
}
`;

module.exports = typeDefs;
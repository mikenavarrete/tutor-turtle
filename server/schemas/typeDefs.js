const { gql } = require('@apollo/client');
const typeDefs = gql`
type Student {
    id: ID!
    name: String!
    email: String!
  }

  type User {
    id: ID!
    email: String!
    name: String!
  }

  input LineItemInput {
    id: ID!
    name: String!
    quantity: Int!
    price: Float!
  }

  type Tutor {
    id: ID!
    name: String!
    email: String!
    subjects: [Subject!]!
  }

  type Subject {
    id: ID!
    name: String!
  }

  type TutoringSession {
    id: ID!
    tutor: Tutor!
    student: Student!
    subject: Subject!
  }

  type Query {
    students: [Student!]!
    subjects: [Subject!]!
    tutors: [Tutor!]!
    tutoringSessions: [TutoringSession!]!
  }

  type Mutation {
    addStudent(name: String!, email: String!): Student!
    addTutor(name: String!, email: String!, subjects: [String!]!): Tutor!
    addSubject(name: String!): Subject!
    addTutoringSession(tutorId: ID!, studentId: ID!, subject: String!): TutoringSession!
    createCheckoutSession(line_items: [LineItemInput!]!): CheckoutSession!
    login(email: String!, password: String!): User!
  }

  type CheckoutSession {
    session: String!
  }

  type LineItem {
    id: ID!
    name: String!
    quantity: Int!
    price: Float!
  }
`;


module.exports = typeDefs;
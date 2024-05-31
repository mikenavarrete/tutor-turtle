const { gql } = require('@apollo/client');
const typeDefs = gql`
type Student {
    id: ID!
    name: String!
    email: String!
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
    createCheckoutSession(line_items: [LineItem!]!): CheckoutSession!
  }

  type CheckoutSession {
    session: String!
  }
`;

module.exports = typeDefs;
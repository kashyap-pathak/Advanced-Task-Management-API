const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    _id: ID!
    username: String!
    role: String!
    organizationId: String!
  }

  input UserInput {
    username: String!
    password: String!
    role: String!
    organizationId: String!
  }

  type RootQuery {
    users: [User!]!
  }

  type RootMutation {
    createUser(userInput: UserInput): User
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

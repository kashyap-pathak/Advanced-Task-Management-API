const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Task {
    _id: ID!
    title: String!
    description: String
    status: String
    dueDate: String
    userId: String
    organizationId: String
  }

  input TaskInput {
    title: String!
    description: String
    status: String
    dueDate: String
    userId: String
    organizationId: String
  }

  type RootQuery {
    tasks: [Task!]!
  }

  type RootMutation {
    createTask(taskInput: TaskInput): Task
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

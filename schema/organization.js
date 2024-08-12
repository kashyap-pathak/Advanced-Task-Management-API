const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Organization {
    _id: ID!
    name: String!
  }

  input OrganizationInput {
    name: String!
  }

  type RootQuery {
    organizations: [Organization!]!
  }

  type RootMutation {
    createOrganization(organizationInput: OrganizationInput): Organization
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

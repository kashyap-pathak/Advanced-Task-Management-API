const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const authMiddleware = require('./middleware/auth');
const organizationSchema = require('./schema/organization');
const userSchema = require('./schema/user');
const taskSchema = require('./schema/task');

const organizationResolvers = require('./resolvers/organization');
const userResolvers = require('./resolvers/user');
const taskResolvers = require('./resolvers/task');

const app = express();

// Middleware
app.use(express.json());
app.use(authMiddleware);

// GraphQL Setup
app.use('/graphql/organizations', graphqlHTTP({
  schema: organizationSchema,
  rootValue: organizationResolvers,
  graphiql: true,
}));

app.use('/graphql/users', graphqlHTTP({
  schema: userSchema,
  rootValue: userResolvers,
  graphiql: true,
}));

app.use('/graphql/tasks', graphqlHTTP({
  schema: taskSchema,
  rootValue: taskResolvers,
  graphiql: true,
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Export the app
module.exports = app;

const User = require('../models/user');

module.exports = {
  users: async () => {
    return User.find();
  },
  createUser: async ({ userInput }) => {
    const user = new User({
      username: userInput.username,
      password: userInput.password,
      role: userInput.role,
      organizationId: userInput.organizationId,
    });
    return user.save();
  },
};

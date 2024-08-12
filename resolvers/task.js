const Task = require('../models/task');

module.exports = {
  tasks: async () => {
    return Task.find();
  },
  createTask: async ({ taskInput }) => {
    const task = new Task({
      title: taskInput.title,
      description: taskInput.description,
      status: taskInput.status,
      dueDate: taskInput.dueDate,
      userId: taskInput.userId,
      organizationId: taskInput.organizationId,
    });
    return task.save();
  },
};

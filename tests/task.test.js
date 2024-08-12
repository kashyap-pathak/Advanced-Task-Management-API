const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const Task = require('../models/task');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Tasks API', () => {
  it('should create a new task', (done) => {
    chai.request(app)
      .post('/graphql/tasks')
      .send({
        query: `
          mutation {
            createTask(taskInput: { title: "Test Task", description: "Test Description", status: "Pending", userId: "user_id_here", organizationId: "org_id_here" }) {
              _id
              title
            }
          }
        `
      })
      .end((err, res) => {
        expect(res.body.data.createTask).to.have.property('title', 'Test Task');
        done();
      });
  });
});

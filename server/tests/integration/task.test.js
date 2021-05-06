const httpStatus = require('http-status');
const request = require('supertest');
const app = require('../../src/app');
const { Task } = require('../../src/models');
const { insertTasks, taskOne } = require('../fixtures/task.fixture');
const { adminAccessToken } = require('../fixtures/token.fixture');
const setupTestDB = require('../utils/setupTestDB');

setupTestDB();

describe('Task routes', () => {
  describe('POST /tasks', () => {
    let newTask;
    beforeEach(() => {
      newTask = {
        text: 'Test text',
        isCompleted: true,
        createdBy: '607f5311e968c02ed4272f77',
      };
    });

    test('should return 201 and successfully create new task if data is ok', async () => {
      insertTasks([taskOne]);

      const res = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(newTask)
        .expect(httpStatus.CREATED);

      expect(res.body).toEqual({
        id: expect.anything(),
        text: newTask.text,
        isCompleted: true,
        createdBy: newTask.createdBy,
      });

      const dbTask = await Task.findById(res.body.id);
      expect(dbTask).toBeDefined();
      expect(dbTask).toMatchObject({
        text: newTask.text,
        isCompleted: true,
        createdBy: newTask.createdBy,
      });
    });
  });
});

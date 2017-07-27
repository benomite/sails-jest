const sails = require('sails');
const request = require('supertest');

beforeAll(done => {
  sails.lift({ log: { level: 'error' } }, err => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    global.app = request(sails.hooks.http.app);
    return err ? done(err) : done(err, sails);
  });
});

afterAll(done => sails.lower(done));

const sails = require('sails');
const request = require('supertest');

beforeAll(done => {
  sails.lift({}, err => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    global.app = request(sails.hooks.http.app);
    done(err, sails);
  });
});

afterAll(sails.lower);

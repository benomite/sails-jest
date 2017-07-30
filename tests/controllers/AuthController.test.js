beforeAll(() =>
  User.create({
    email: 'user@test.com',
    password: '12345',
  })
);

describe('AuthController', () => {
  describe('create', () => {
    it('should return a valid response', () =>
      app
        .post('/auth')
        .field('email', 'user@test.com')
        .field('password', '12345')
        .expect(201));
  });
});

describe('User Controller', () => {
  describe('create', () => {
    it('should create the user', () =>
      app
        .post('/user')
        .field('email', 'user@email.com')
        .field('password', '12345')
        .expect(201));

    it('should not create the user', () =>
      app.post('/user').field('email', 'user@email.com').expect(400));
  });
});

describe('User Model', () => {
  it('should create the user', () =>
    User.create({
      email: 'user@test.com',
      password: '12345',
    }));

  it('should not create the user', () => {
    User.create({ email: 'user@test.com' }).catch(err =>
      expect(err).toBeDefined()
    );
  });
});

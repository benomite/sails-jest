describe('isAuthenticated Policy', () => {
  it('should validate the token', () => {
    const req = { param: () => CipherService.sign('user.id.1') };
    const res = {};
    const next = jest.fn();
    sails.middleware.policies.isauthenticated(req, res, next);
    expect(next.mock.calls.length).toBe(1);
    expect(next.mock.calls[0][0]).toBeUndefined();
    expect(req.user).toMatchSnapshot();
  });

  it('should refuse the request', () => {
    const req = { param: () => 'invalid token' };
    const res = { forbidden: jest.fn() };
    const next = jest.fn();
    sails.middleware.policies.isauthenticated(req, res, next);
    expect(next.mock.calls.length).toBe(0);
    expect(res.forbidden.mock.calls.length).toBe(1);
    expect(res.forbidden.mock.calls[0][0]).toMatchSnapshot();
  });
});

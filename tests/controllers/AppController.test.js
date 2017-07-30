describe('App Controller', () => {
  describe('index', () => {
    it('should return a valid response', () => app.get('/').expect(200));
  });
});

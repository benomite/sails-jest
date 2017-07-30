describe('Cipher Service', () => {
  describe('hash', () => {
    it('should properly hash a raw value', () => {
      const raw = '12345';
      const hashed = CipherService.hash(raw);
      expect(hashed).toBeDefined();
    });
  });

  describe('compare', () => {
    it('should compare the hashed and raw values', () => {
      const raw = '12345';
      const hashed = CipherService.hash(raw);
      const compared = CipherService.compare(raw, hashed);
      expect(compared).toBeTruthy();
    });

    it('should throw an error if the password is not valid', () => {
      const raw = '12345';
      const wrong = '-12345';
      const hashed = CipherService.hash(raw);
      const compare = () => CipherService.compare(wrong, hashed);
      expect(compare).toThrowErrorMatchingSnapshot();
    });
  });

  describe('sign', () => {
    it('should sign the raw value', () => {
      const raw = '12345';
      const signed = CipherService.sign(raw);
      expect(signed).toBeDefined();
    });
  });

  describe('verify', () => {
    it('should verify the signed value', () => {
      const raw = '12345';
      const signed = CipherService.sign(raw);
      const verified = CipherService.verify(signed);
      expect(verified).toEqual(raw);
    });

    it('should throw an error if the token is not valid', () => {
      const wrong = '-12345';
      const verify = () => CipherService.verify(wrong);
      expect(verify).toThrowErrorMatchingSnapshot();
    });
  });
});

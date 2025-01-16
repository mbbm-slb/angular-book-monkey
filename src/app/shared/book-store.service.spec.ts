
// whitelist: mit dem prefix "f" wird der Testfall als "fdescribe" markiert, d.h. nur dieser Testfall wird ausgeführt
fdescribe('BookStoreService Dummy', () => {
  it('should pass this dummy test', () => {
    const value = true;
    expect(value).toBeTrue();
  });

  it('should add numbers correctly', () => {
    const sum = 2 + 3;
    expect(sum).toEqual(5);
  });

  // blacklist: mit dem prefix "x" wird der Testfall als "xit" markiert, d.h. dieser Testfall wird nicht ausgeführt
  xit('should check if a string contains a substring', () => {
    const message = 'Hello, Jasmine!';
    expect(message).toContain('Jasmine');
  });
});
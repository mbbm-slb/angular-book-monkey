
describe('BookStoreService Dummy', () => {
  it('should pass this dummy test', () => {
    const value = true;
    expect(value).toBeTrue();
  });

  it('should add numbers correctly', () => {
    const sum = 2 + 3;
    expect(sum).toEqual(5);
  });

  it('should check if a string contains a substring', () => {
    const message = 'Hello, Jasmine!';
    expect(message).toContain('Jasmine');
  });
});
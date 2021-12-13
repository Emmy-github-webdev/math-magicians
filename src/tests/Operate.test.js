import operate from '../logic/operate';

describe('Operation should work without error', () => {
  test('Function returns a string', () => {
    expect(typeof (operate('2', '2', '+'))).toBe('string');
  });

  test('2 + 2 returns 4', () => {
    expect(operate('2', '2', '+')).toBe('4');
  });

  test('2 - 2 returns 0', () => {
    expect(operate('2', '2', '-')).toBe('0');
  });

  test('2 x 2 returns 4', () => {
    expect(operate('2', '2', 'x')).toBe('4');
  });

  test('2 ÷ 2 returns 1', () => {
    expect(operate('2', '2', '÷')).toBe('1');
  });

  test('2 ÷ 0 returns an error message', () => {
    expect(operate('2', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('5 % 2 returns 1', () => {
    expect(operate('5', '2', '%')).toBe('1');
  });

  test('Using and unknow operation throws an error', () => {
    expect(() => operate('5', '2', '/')).toThrow("Unknown operation '/'");
  });
});

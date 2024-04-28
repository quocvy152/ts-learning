
import { isEven } from './01-main';

describe('isEven function', () => {
  test('should return true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(100)).toBe(true);
  });

  test('should return false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(99)).toBe(false);
  });

  test('should return true for zero', () => {
    expect(isEven(0)).toBe(true);
  });

  test('should return false for negative even numbers', () => {
    expect(isEven(-2)).toBe(false);
    expect(isEven(-4)).toBe(false);
  });

  test('should return false for negative odd numbers', () => {
    expect(isEven(-1)).toBe(false);
    expect(isEven(-3)).toBe(false);
  });
});

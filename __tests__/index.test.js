import { fizzbuzz } from '../index';


describe('FizzBuzzTest', () => {
  test('1を渡すと文字列"1"を返す', () => {
    // 準備
    // 実行 & 検証
    expect(fizzbuzz.convert(1)).toBe("1");
  });
  test('2を渡すと文字列"2"を返す', () => {
    // 準備
    // 実行 & 検証
    expect(fizzbuzz.convert(2)).toBe("2");
  });
});
import { fizzbuzz } from '../index';


describe('FizzBuzzTest', () => {
  test('1を渡すと文字列"1"を返す', () => {
    // 準備
    // 実行
    // 検証
    const actual = fizzbuzz.convert(1);
    expect(actual).toBe("0");
  });
});
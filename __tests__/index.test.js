import { fizzbuzz } from '../index';


describe('FizzBuzzTest', () => {
  beforeEach( () => {
    // 前準備処理をここにまとめる
  })

  test('1を渡すと文字列"1"を返す', () => {
    // 実行 & 検証
    expect(fizzbuzz.convert(1)).toBe("1");
  });

  test('2を渡すと文字列"2"を返す', () => {
    // 実行 & 検証
    expect(fizzbuzz.convert(2)).toBe("2");
  });

  test('3を渡すと文字列"Fizz"を返す', () => {
    // 実行 & 検証
    expect(fizzbuzz.convert(3)).toBe("Fizz");
  });

  test('5を渡すと文字列"Buzz"を返す', () => {
    // 実行 & 検証
    expect(fizzbuzz.convert(5)).toBe("Buzz");
  });
});
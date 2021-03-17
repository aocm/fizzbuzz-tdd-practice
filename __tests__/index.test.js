import { fizzbuzz } from '../index';


describe('Fizz Buzz 数列と変換規則を扱うfizzbuzzクラス', () => {
  beforeEach( () => {
    // 前準備処理をここにまとめる
  })

  describe('数を文字列に変換する', () => {

    describe('3の倍数のときは数の代わりに「Fizz」に変換する', () => {
      test('3を渡すと文字列"Fizz"を返す', () => {
        // 実行 & 検証
        expect(fizzbuzz.convert(3)).toBe("Fizz");
      });
    })

    describe('5の倍数のときは数の代わりに「Buzz」に変換する', () => {
      test('5を渡すと文字列"Buzz"を返す', () => {
        // 実行 & 検証
        expect(fizzbuzz.convert(5)).toBe("Buzz");
      });
    })

    describe('そのほかの数にの時はそのまま出力する', () => {
      test('1を渡すと文字列"1"を返す', () => {
        // 実行 & 検証
        expect(fizzbuzz.convert(1)).toBe("1");
      });

      test('2を渡すと文字列"2"を返す', () => {
        // 実行 & 検証
        expect(fizzbuzz.convert(2)).toBe("2");
      });
    })
  })
});
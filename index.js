export class fizzbuzz {
  constructor() {}

  static convert(num){
    if (num % 3 === 0) {
      return "Fizz";
    }
    if (num % 5 === 0) {
      return "Buzz";
    }
    return String(num);
  }
}
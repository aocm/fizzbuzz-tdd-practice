export class fizzbuzz {
  constructor() {}

  static convert(num){
    if (num % 3 === 0) {
      return "Fizz";
    }
    return String(num);
  }
}
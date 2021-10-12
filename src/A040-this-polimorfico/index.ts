export class Calculator {
  constructor(public number: number) {}
  add1(n: number): this {
    this.number += n;
    return this;
  }
  sub1(n: number): this {
    this.number -= n;
    return this;
  }
  div1(n: number): this {
    this.number /= n;
    return this;
  }
  mult1(n: number): this {
    this.number *= n;
    return this;
  }
}

const cal = new Calculator(10);
console.log(cal.add1(10).mult1(2));

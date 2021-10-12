//utilizando this como tipo de dado
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

export class SubCalculator extends Calculator {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}
const cal = new Calculator(10);
console.log(cal.add1(10).mult1(2).div1(2));

const subCal = new SubCalculator(10);
console.log(subCal.add1(10).mult1(2).div1(2).pow(2));

//Builder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: 'get' | 'post'): this {
    this.url = url;
    return this;
  }
}

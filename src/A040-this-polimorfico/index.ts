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
const subCal = new SubCalculator(10);
console.log(subCal.add1(10).mult1(2).div1(2).pow(2));

//Builder - GoF
//padrao de projeto construtor
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }
  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder(); //Builder
request.setUrl('http://google.com').setMethod('post').send(); // utilizando tudo na  mesma linha

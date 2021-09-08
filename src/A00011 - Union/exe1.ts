function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b; //soma
  return `${a} ${b}`;
}
console.log(addOrConcat(2, 22));

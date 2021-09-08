let x: unknown;
const y = 2000;
x = 'Geronimo';
x = 100;

console.log(x);

if (typeof x === 'number') {
  console.log(x + y);
}

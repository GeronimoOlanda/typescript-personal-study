let newArray: string[];
function mapStrings(array: string[], callbackfn: CallableFunction): string[] {
  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const acbMapped = mapStrings(abc, function (item: any) {
  return item.toUpperCase();
});

console.log(acbMapped);

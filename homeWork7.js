const a = [4, 'abc', 12, 16];
const b = [4, 10, 23, 33];

const checkInfo = (inputArray) => !inputArray.every(function(elem){
  return typeof elem != 'string'
})
  console.log(arraySortInfo(a));
  console.log(arraySortInfo(b));
function sortArr(arr, size) {
  var num0 = 0;
  var num1 = 0;
  var num2 = 0;
  let sort = [];
  for (let e of arr) {
    switch (e) {
      case 0:
        num0++;
        break;
      case 1:
        num1++;
        break;
      case 2:
        num2++;
        break;
      default:
    }
  }
  while (num0 !== 0) {
    sort.push(0);
    num0--;
  }
  while (num1 !== 0) {
    sort.push(1);
    num1--;
  }
  while (num2 !== 0) {
    sort.push(2);
    num2--;
  }

  return sort;
}

var array1 = [0, 2, 1, 2, 0];
var array2 = [2, 1, 0, 1, 2, 1, 0, 1, 0, 2];
console.log("Sort for Array: " + array1);
console.log(sortArr(array1, array1.length));
console.log("\n");

console.log("Sort for Array: " + array2);
console.log(sortArr(array2, array2.length));
console.log("\n");
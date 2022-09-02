function sortArr(arr, size) {
  var num0 = 0;
  var num1 = 0;
  var num2 = 0;
  let i = 0;
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
  while (i < num0) {
    arr[i] = 0;
    i++;
  }
  while (i < num0 + num1) {
    arr[i] = 1;
    i++;
  }
  while (i < num0 + num1 + num2) {
    arr[i] = 2;
    i++;
  }

  console.log(`Sorted Array -> ${arr}`);
}

var array1 = [0, 2, 1, 2, 0];
var array2 = [2, 1, 0, 1, 2, 1, 0, 1, 0, 2];
console.log("Unsorted Array: " + array1);
// console.log(sortArr(array1, array1.length));
sortArr(array1, array1.length);
console.log("\n");

console.log("Unsorted Array: " + array2);
// console.log(sortArr(array2, array2.length));
sortArr(array2, array2.length);
console.log("\n");

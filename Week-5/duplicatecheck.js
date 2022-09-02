function duplicateCheck(arr) {
  var set = new Set(arr);
  // for (let el of arr) {
  //   set.add(el);
  // }
  // set.add(arr);
  //if the size of the set and the array length are same
  //then there are no duplicates, else we have duplicates.
  if (set.size === arr.length) {
    return false;
  }
  return true;
}

var arr1 = [11, 22, 11, 34, 6, 88, 9];
var arr2 = [11, 22, -11, 34, 6, 88, 9];

console.log("/-------------------------/\n");
console.log("First array checking duplicates:" + arr1);
console.log(duplicateCheck(arr1)); //output - true
console.log("\n");
console.log("/-------------------------/\n");
console.log("Second array checking duplicates:" + arr2);
console.log(duplicateCheck(arr2)); //output - false
console.log("\n");
console.log("/-------------------------/\n");

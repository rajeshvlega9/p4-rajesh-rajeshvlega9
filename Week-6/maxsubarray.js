function maxSubArr(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let CurrSum = 0;
  let maxGlob = arr[0];
  for (let i = 0; i < arr.length; i++) {
    // reset the counter if the currSum is less than 0
    if (CurrSum < 0) {
      CurrSum = 0;
    }
    // add and compare whichever is maximum
    CurrSum = CurrSum + arr[i];
    maxGlob = Math.max(CurrSum, maxGlob);
  }
  return maxGlob;
}

var arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var arr2 = [ 1, 2, 3, 4,-10 ];
var msa1 = maxSubArr(arr1);

console.log("Maximum Sub array " + arr1 + " is " + msa1);

var msa2 = maxSubArr(arr2);

console.log("Maximum Sub array " + arr2 + " is " + msa2);

function threeSum(arr, target) {
  let result = "";

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          result = "(" + arr[i] + "," + arr[j] + "," + arr[k] + ")";
          return result;
        }
      }
    }
  }
  return false;
}

var nums = [-1, 2, 1, -4];
var sum = 2;
console.log("Array " + nums + " Target sum to search " + sum);
console.log(threeSum(nums, sum));

var nums1 = [-1, 2, -4, 1];
var sum1 = 2;
console.log("Array " + nums1 + " Target sum to search " + sum1);
console.log(threeSum(nums1, sum1));

var nums2 = [1, 4, 45, 6, 10, 8];
var sum2 = 20;
console.log("Array " + nums2 + " Target sum to search " + sum2);
console.log(threeSum(nums2, sum2));

console.log("Array " + nums2 + " Target sum to search " + "51");
console.log(threeSum(nums2, 51));

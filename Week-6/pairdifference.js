function findPair(arr, diff) {
  let size = arr.length;
  let pair = [];
  let sortedArr = arr.sort();
  let i = 0;
  let min = sortedArr[i];
  let max = sortedArr[size - 1];

  while (diff !== max - min && i < size) {
    min = sortedArr[i];
    max = sortedArr[size];
    i++;
    size--;
  }

  if (diff === max - min) {
    pair.push(max);
    pair.push(min);
    return pair;
  } else {
    return 0;
  }
}

var difference = 78;
var unsortedArr = [5, 10, 3, 2, 50, 80];
console.log("For Array " + unsortedArr + " and " + difference + " the pair below is:");
console.log(findPair(unsortedArr, difference));

var difference1 = 30;
var unsortedArr1 = [-10, 20];
console.log("For Array " + unsortedArr1 + " and " + difference1 + " the pair below is:");
console.log(findPair(unsortedArr1, difference1));

var difference2 = 88;
var unsortedArr2 = [8, 20, 40, 2, 1];
console.log("For Array " + unsortedArr2 + " and " + difference2 + " the pair below is:");
console.log(findPair(unsortedArr2, difference2));

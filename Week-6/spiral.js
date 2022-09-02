function matrix(m, n) {
  var num = 1;
  var arrX = [];
  var arrY = [];
  for (let i = 0; i < m; i++) {
    arrY = [];
    for (let j = 0; j < n; j++) {
      arrY[j] = num;
      num++;
    }
    arrX[i] = arrY;
  }
  return arrX;
}
// this spiralOrder3 version which is created on
function spiralOrder3(matrix) {
  var numbers = [];
  let k = 0;
  let i = 0;
  let j = 0;
  var temp_i = 0;
  let num_i = matrix.length - 1;
  let num_j = 0;
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      //first line print as it
      if (i === 0) {
        numbers[k] = matrix[i][j];
        k++;
        num_j = j; //capture for further reference
      }
    }
    // traverse vertically until before last line.
    temp_i = i + 1;
    while (temp_i <= num_i - 1 && temp_i > 0) {
      num_i--;
      numbers[k] = matrix[temp_i][num_j];
      temp_i++;
      k++;
    }
    //Last line print reverse
    if (i === matrix.length - 1) {
      for (j = matrix[i].length - 1; j >= 0; j--) {
        numbers[k] = matrix[i][j];
        k++;
      }
      temp_i = i - 1;
    }
  }
  num_j--;
  j = 0;
  while (j <= num_j) {
    numbers[k] = matrix[temp_i][j];
    k++;
    j++;
  }
  return numbers;
}

function spiralOrder(matrix) {
  let numbers = [];
  let lcol = matrix[0].length - 1,
    lrow = matrix.length - 1;
  let frow = 0,
    fcol = 0;
  while (frow <= lrow && fcol <= lcol) {
    // first row
    for (let i = fcol; i <= lcol; i++) numbers.push(matrix[frow][i]);
    frow++;
    // last column
    for (i = frow; i <= lrow; i++) numbers.push(matrix[i][lcol]);
    lcol--;
    //bottow row
    for (i = lcol; i >= fcol; i--) numbers.push(matrix[lrow][i]);
    lrow--;
    //first col
    for (i = lrow; i >= frow; i--) numbers.push(matrix[i][fcol]);
    fcol++;
  }
  return numbers;
}

var mat33 = matrix(3, 3);
console.log("Matrix of 3,3 -> \n");
console.log(mat33);
console.log("\n");
console.log("Spiral Order for matrix 3,3 -> \n");
console.log(spiralOrder(mat33));
// console.log(spiralOrder3(mat33));

var mat34 = matrix(3, 4);
console.log("Matrix of 3,4 -> \n");
console.log(mat34);
console.log("\n");
console.log("Spiral Order for matrix 3,4 -> \n");
// console.log(spiralOrder3(mat34));
console.log(spiralOrder(mat34));

var mat55 = matrix(5, 5);
console.log("Matrix of 5,5 -> \n");
console.log(mat55);
console.log("\n");
console.log("Spiral Order for matrix 5,5 -> \n");
console.log(spiralOrder(mat55));
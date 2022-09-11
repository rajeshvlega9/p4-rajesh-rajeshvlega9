// working only for the first case
const nextGE = function (arr) {
  var n = arr.length;
  let s = [];
  let n1 = 0;
  let res = [];
  if (n === 0) return -1;
  s.push(arr[0]);
  for (let i = 1; i < n; i++) {
    while (s.length !== 0 && s[s.length - 1] < arr[i]) {
      res[n1] = arr[i];
      n1++;
      s.pop();
    }
    s.push(arr[i]);
  }

  while (s.length !== 0) {
    res[n1] = -1;
    n1++;
    s.pop();
  }
  return res;
};

const nextGE1 = function (arr) {
  var n = arr.length;
  let s = [];
    
  for (let i = 0; i < n; i++) {
    while (s.length > 0 && s[s.length - 1]["v"] < arr[i]) {
      var v = s.pop();
      arr[v["i"]] = arr[i];
      }
      // push the value to the stack with map
    s.push({ v: arr[i], i: i });

  }
// updating the array 
  while (s.length > 0) {
    v = s.pop();
    arr[v["i"]] = -1;
  }
  return arr;
};

let a1 = [1, 3, 2, 4];
console.log(`for ${a1}`);
console.log(nextGE1(a1));

let a2 = [6, 8, 0, 1, 3];
console.log(`for ${a2}`);
console.log(nextGE1(a2));

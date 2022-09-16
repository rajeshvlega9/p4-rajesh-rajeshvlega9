const findJudge = function (n, arr) {
  if (arr.length === 0 && n === 1) return n;
  const trustMap = new Map();

  for (const [a, b] of arr) {
    if (!trustMap.has(b)) {
      trustMap.set(b, [[], [a]]);
    } else {
      trustMap.get(b)[1].push(a);
    }
    if (!trustMap.has(a)) {
      trustMap.set(a, [[b], []]);
    } else {
      trustMap.get(a)[0].push(b);
    }
  }

  for (const [judge, [trusted, trust]] of trustMap) {
    if (trusted.length === 0 && trust.length === n - 1) {
      return judge;
    }
  }
  return -1;
};

let a1 = [[1, 2]];
let n1 = 2;

console.log(a1);
console.log(" -> ");
console.log(findJudge(n1, a1));
console.log(" ");

let a2 = [
  [1, 3],
  [2, 3],
];
let n2 = 3;
console.log(a2);
console.log(" -> ");
console.log(findJudge(n2, a2));
console.log(" ");

let a3 = [
  [1, 3],
  [2, 3],
  [3, 1],
];
let n3 = 3;

console.log(a3);
console.log(" -> ");
console.log(findJudge(n3, a3));
console.log(" ");

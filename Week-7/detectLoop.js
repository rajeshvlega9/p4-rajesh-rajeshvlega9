const createNode = function (data) {
  this.data = data;
  this.next = null;
};

let head = null;
const singleLinkedList = function (arr) {
  head = new createNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new createNode(arr[i]);
    curr = curr.next;
  }
};

const createLoop = function (k) {
  let kn = k;
  let pivot = head;
  if (kn > 0) {
    while (--kn) {
      pivot = pivot.next;
    }
    let tail = pivot;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = pivot;
  }
};

const detectLoop = function () {
  var s = new Set();
  let curr = head;
  while (curr !== null) {
    if (s.has(curr.data)) {
      return true;
    }
    s.add(curr.data);
    curr = curr.next;
  }
  return false;
};

let a1 = [1, 3, 4];
let k1 = 2;

console.log(a1);
console.log(k1);

singleLinkedList(a1);
createLoop(k1);

console.log(detectLoop());
console.log("");

let a2 = [1, 8, 3, 4];
let k2 = 0;

console.log(a2);
console.log(k2);

singleLinkedList(a2);
createLoop(k2);

console.log(detectLoop());
console.log("");

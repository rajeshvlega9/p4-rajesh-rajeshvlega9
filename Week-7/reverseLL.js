const singlyLLNode = function (data) {
  this.data = data;
  this.next = null;
};

let head = null;

const singlyLinkedList = function (arr) {
  head = new singlyLLNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new singlyLLNode(arr[i]);
    curr = curr.next;
  }
};

const reverseSLL = function () {
  let prev = null,
    curr = head,
    after = null;
  while (curr.next !== null) {
    after = curr.next;
    curr.next = prev;
    prev = curr;
    curr = after;
  }
  curr.next = prev;
  head = curr;

  return head;
};

const traverseSLL = function () {
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
};

let a1 = [1, 2, 3, 4, 5, 6];
let a2 = [2, 7, 8, 9, 10];

singlyLinkedList(a1);
console.log("Before reversal :");
// console.log(traverseSLL());
traverseSLL();

console.log("After reversal :");
reverseSLL();
traverseSLL();
console.log("/--------------------------------------------/");

singlyLinkedList(a2);
console.log("Before reversal :");
// console.log(traverseSLL());
traverseSLL();

console.log("After reversal :");
reverseSLL();
traverseSLL();
console.log("/--------------------------------------------/");

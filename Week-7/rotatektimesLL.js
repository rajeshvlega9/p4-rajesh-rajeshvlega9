let head = null;

const createLLNode = function (data) {
  this.data = data;
  this.next = null;
};

const singlyLinkedList = function (arr) {
  head = new createLLNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new createLLNode(arr[i]);
    curr = curr.next;
  }
};

const traverseSLL = function () {
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
};

const rotateKTimesLL = function (k) {
  let prev = null,
    after = null;
  let tail = head,
    n = 1;
  while (tail.next) {
    n++;
    tail = tail.next;
  }

  k %= n;

  if (k <= 0) return head;

  tail.next = head;
  let steps = n - k;
  let newTail = tail;
  while (steps--) {
    newTail = newTail.next;
  }
  let newHead = newTail.next;
  newTail.next = null;
  head = newHead;
  return head;
};

let a1 = [1, 2, 67, 34, 77, 22, 64, 31];
singlyLinkedList(a1);
console.log("Before rotation");
traverseSLL();

rotateKTimesLL(4);
console.log("After rotation");
traverseSLL();

function ownQueue() {
  let s1 = [], s2 = [];
  this.s1 = s1;
  this.s2 = s2;
}

ownQueue.prototype.enqueue = function (element) {
  while (this.s1.length !== 0) this.s2.push(this.s1.pop());

  this.s1.push(element);
  while (this.s2.length !== 0) this.s1.push(this.s2.pop());
};

ownQueue.prototype.dequeue = function () {
  if (this.s1.length === 0) return -1;
  return this.s1.pop();
};

ownQueue.prototype.display = function () {
  return this.s1;
}

let callArrayQueue = function (a) {
  var customQueue = new ownQueue();
  for (let i = 0; i <= a.length - 1; i++){
    switch (a[i]) {
      case 1:
        i++;
        customQueue.enqueue(a[i]);
        break;
      case 2:
        console.log(customQueue.dequeue());
        break;
      default:
        //do nothing
    }
  }

  console.log("Display current queue: " + customQueue.display());
}

let a1 = [1, 2, 1, 3, 2, 1, 4, 2];

let a2 = [1, 2, 2, 2, 1, 4];

console.log(`for array -${a1}`);
callArrayQueue(a1);
console.log("\n");

console.log(`for array -${a2}`);
callArrayQueue(a2);
console.log("\n");
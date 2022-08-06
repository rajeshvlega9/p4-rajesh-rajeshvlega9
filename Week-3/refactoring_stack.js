function createStack() {
  return {
    push(item) {
      obj.items.push(item);
    },
    pop() {
      obj.items.pop();
    },
  };
}

var obj = {
    items: [],
};

const stack = createStack();
stack.push(10);
stack.push(9);
stack.push(5);
stack.pop(5);
console.log(stack.items);
// console.log(obj.items); this has the stack value

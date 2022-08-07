/* Iterators */
function fibIter(num) {
  return {
    [Symbol.iterator]() {
      let curr = 0;
      let prev = 0;
      let temp = 0;
      let i = 0;
      return {
        next() {
          i++;
          if (i <= num) {
            if (i === 1) {
              curr = 1;
              temp = prev = 0;
            } else {
              prev = curr;
              curr = temp + curr;
              temp = prev;
            }
    //  [prev, curr] = [curr, (prev + curr) || 1];  // want to understand this statement - need to get some reference to understand
            return {
              value: prev,
              done: false,
            };
          }
          return {
            done: true,
          };
        },
      };
    },
  };
}

var n = 10;

console.log(`The fibonacci series for first ${n} numbers:`);
for (let no of fibIter(n)) {
  console.log(no);
}

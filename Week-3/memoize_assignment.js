// Assignment for creating own memoize function
// avoiding to use the library 'loadash/memoize' or from underscore

function memoize(fun) {
  const cache = {};
  return (...args) => {
    const val = args.toString();
    //   const val = JSON.stringify(args); either this or we can use args.toString()
    if (!cache[val]) {
      console.log("Calculated -");
      cache[val] = fun(...args);
      console.log(`value is ${cache[val]}`);
      return cache[val];
    } else {
      console.log("From Cache - ");
      console.log(cache[val]);
      return cache[val];
    }
  };
}

// Function to add 2 numbers
function add(a, b) {
  return a + b;
}

// Creating the memoize function for Add function
const memoizeAdd = memoize(add);

memoizeAdd(100, 100);
memoizeAdd(100, 0);
memoizeAdd(100, 200);
memoizeAdd(100, 100);

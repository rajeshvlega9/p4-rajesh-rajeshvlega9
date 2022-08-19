// custom Promise function without external libraries
[FULFILLED , REJECTED , PENDING] = ['FULFILLED', 'REJECTED', 'PENDING']; 
/* class for myPromis */
class myPromise {
  /* Defining the states */ 
  state;
  isResolved = false;
  isRejected = false;
  resolvedData;
  rejectedData;
  thenChain = [];  //this is for the then chain
  catchChain = []; //this is for the catch chain

  constructor(exe) {
    //Default status is pending as this promise is just created.
    this.state = PENDING;

    //resolve with Value
    const resolve = (value) => {
      this.state = FULFILLED;
      this.isResolved = true;
      this.resolvedData = value;
      // checking the length of thenChain anything greater than zero will
      // will call the subsequent chain, using the accumulator and the function
      if (this.thenChain.length) {
        this.thenChain.reduce((acc, fun) => {
          return fun(acc);
        }, this.resolvedData);
      }
    };

    //Reject with reason
    const reject = (reason) => {
      this.state = REJECTED;
      this.isRejected = true;
      this.rejectedData = reason;
      // checking the length of catchChain anything greater than zero will
      // will call the subsequent chain, using the accumulator and the function
      if (this.catchChain.length) {
        this.catchChain.reduce((acc, fun) => {
          return fun(acc);
        }, this.rejectedData);
      }
    };
    exe(resolve, reject);
  }
  then(fun) {
    //pushing the function on to the array which is for the then chain
      this.thenChain.push(fun);
    // check if this is resolved - then we will call the function
    if (this.isResolved) {
      this.thenChain.reduce((acc, fun) => {
        return fun(acc);
      }, this.resolvedData);
    }
    return this;
  }
  catch(fun) {
    //pushing the function on to the array which is for the catch Chain
    this.catchChain.push(fun);
    // check if this is rejected - then we will call the function 
    if (this.isRejected) {
      this.catchChain.reduce((acc, fun) => {
        return fun(acc);
      }, this.rejectedData);
    }
    return this;
  }
  finally(fun) {
    // pushing both the then chain and the catch chain
    // with the function, as this will be call at the final place
    this.thenChain.push(fun);
    this.catchChain.push(fun);
  }
}

function getNumber() {
  // random round integer from 0 to 100:
  return Math.floor(Math.random() * 101);
}

// getting the Random number
var randNum = getNumber();
console.log(`Random Number - ${randNum}`);

// calling the promise with the below conditions and with then and catch chain
new myPromise((resolve, reject) => {
  setTimeout(() => {
    // if (randNum % 5 === 0) {
    //     reject(randNum);
    // } else {
    //     resolve(randNum);
    // }
    // replace the if with ternary operator
    randNum % 5 === 0 ? reject(randNum) : resolve(randNum);
  }, 1000);
})
  .then((randNum) => {
    return "Resolved - " + randNum;
  })
  .then((text) => {
    return "Not divisible by 5, Hence " + text;
  })
  .catch((randNum) => {
    return "Rejected - " + randNum;
  })
  .catch((text) => {
    return "Divisible by 5, Hence " + text;
  })
  .finally((print) => console.log(print));

// custom Promise function without external libraries
class myPromise {
    isResolved = false;
    isRejected = false;
    resolvedData;
    rejectedData;
    thenFunc;
    catchFunc;

    constructor(exe) {
        
        //resolve
        const resolve(value) {
            this.isResolved = true;
            this.resolvedData = value;
        }

        //Reject with reason
        const reject(reason) {
            this.isRejected = true;
            this.rejectedData = reason;
        }
        exe(resolve, reject);
    }
    then(fun) {
        
    }
    catch(fun) {

    }

}

function getNumber() {
    // random round integer from 0 to 100:
    return Math.floor((Math.random() * 101));
}

var randNum = getNumber();
console.log(randNum);

let prom = new myPromise((resolve, reject) => {
    if (randNum % 5 === 0) {
        reject(randNum);
    } else {
        resolve(randNum);
    }
});

prom.
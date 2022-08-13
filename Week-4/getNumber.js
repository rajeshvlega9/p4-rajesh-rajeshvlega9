// custom Promise function without external libraries
class myPromise {
    isResolved = false;
    isRejected = false;
    resolvedData;
    rejectedData;
    thenFunc;
    catchFunc;

    constructor(exe) {
        
        //resolve with Value
        const resolve = (value) => {
            this.isResolved = true;
            this.resolvedData = value;
            
            if (typeof this.thenFunc === 'function') {
                this.thenFunc(this.resolvedData);
            }
        }

        //Reject with reason
        const reject = (reason) => {
            this.isRejected = true;
            this.rejectedData = reason;
            if (typeof this.catchFunc === 'function') {
                this.catchFunc(this.rejectedData)
            }
        }
        exe(resolve, reject);
    }
    then(fun) {
        this.thenFunc = fun;
        if (this.isResolved) {
            this.thenFunc(this.resolvedData);
        }
    }
    catch(fun) {
        this.catchFunc = fun;
        if (this.isRejected) {
            this.catchFunc(this.rejectedData);
        }
    }

}

function getNumber() {
    // random round integer from 0 to 100:
    return Math.floor((Math.random() * 101));
}

var randNum = getNumber();
console.log(randNum);

let prom = new myPromise((resolve, reject) => {
    setTimeout(() => {
        if (randNum % 5 === 0) {
            reject(randNum);
        } else {
            resolve(randNum);
        }
    }, 1000);
});

prom.then((randNum) => {
    console.log(`Resolved - ${randNum} is not divisible by 5`);
});
prom.catch((randNum) => {
    console.log(`Rejected - ${randNum} is divisible by 5`);
});
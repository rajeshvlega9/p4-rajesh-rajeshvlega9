const parenthesisCheck = function (arr) {
  //   let stk_1 = []; // for {}
  //   let stk_2 = []; // for ()
  let stk = []; // for []

  for (let e of arr) {
    let top = stk[stk.length - 1]; // assign the top to check the opening parenthesis
    switch (e) {
      case "{":
      case "[":
      case "(":
        stk.push(e);
        break;
      case "}":
        if (stk.length !== 0 && top === "{") {
          stk.pop();
        } else {
          return false;
        }
        break;
      case ")":
        if (stk.length !== 0 && top === "(") {
          stk.pop();
        } else {
          return false;
        }
        break;
      case "]":
        if (stk.length !== 0 && top === "[") {
          stk.pop();
        } else {
          return false;
        }
        break;
    }
  }

  return stk.length === 0;
};

let exp1 = "[()]{}{()()}";
let exp2 = "[(])";

console.log("Parenthesis Check for :" +exp1);

console.log(parenthesisCheck(exp1));
console.log("\n");
console.log("Parenthesis Check for :" +exp2);
console.log(parenthesisCheck(exp2));

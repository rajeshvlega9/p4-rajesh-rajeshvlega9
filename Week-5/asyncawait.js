function doTask1(num) {
  return num + 10;
}
function doTask2(num1) {
  return num1 * 20;
}
function doTask3(num2) {
  return num2 - 30;
}

async function asyncFn() {
  console.log("---------- async/await - function call ---------- \n");
  const no = await doTask1(2);
  console.log(`first no - ${no}`);
  const n1 = await doTask2(no);
  console.log(`second no - ${n1}`);
  const n2 = await doTask3(n1);

  console.log(`Magic No - ${n2}\n`);
  console.log("------------------------------------------------\n");
}

function* genFn() {
  console.log("---------- Generator - function call ---------- \n");
  const no_1 = doTask1(2);
  yield no_1;

  const n1_1 = doTask2(no_1);
  yield n1_1;

  const n2_1 = doTask3(n1_1);
  yield n2_1;

  console.log("------------------------------------------------\n");
}

const genObj = genFn();
console.log(`first no - ${genObj.next().value}`);
console.log(`second no - ${genObj.next().value}`);
console.log(`Magic no - ${genObj.next().value}`);

asyncFn();

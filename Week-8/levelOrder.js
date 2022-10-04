const TreeNode = function (val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
};

const insertIntoTree = function (i, arr) {
  let curr = null;
  if (i < arr.length) {
    curr = new TreeNode(
      arr[i],
      insertIntoTree(2 * i + 1, arr),
      insertIntoTree(2 * i + 2, arr)
    );
  }
  return curr;
};

const createTree = function (arr) {
  return insertIntoTree(0, arr);
};

const levelOrder = function (root) {
  let queue = [];
  queue.push(root);
  let result = [];
  if (root === null) return result;
  while (queue.length !== 0) {
    let ql = queue.length;
    let level = [];
    for (let i = 0; i < ql; i++) {
      let node = queue.shift();
      if (node.val !== null) {
        level.push(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(level);
  }
  return result;
};

let a1 = [3, 9, 20, null, null, 15, 7];
let root1 = createTree(a1);

console.log(levelOrder(root1));

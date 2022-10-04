const TreeNode = function (val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
};

const insertIntoTree = function (i, arr) {
  let curr = null;
    if (i < arr.length) {
      //create a node which inserts either of the both sides recursively until the length
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

const maxDepth = function (root) {
  if (!root) return 0;
    //return the maximum depth either left or right of the node.
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

let a1 = [3, 9, 20, null, null, 15, 7];
let root1 = createTree(a1);

console.log(a1);
console.log(maxDepth(root1));

let a2 = [1, null, 2];
let root2 = createTree(a2);

console.log(a2);
console.log(maxDepth(root2));

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

var isValidBST = function (root) {
    const isValid = function (root, left, right) {
        if (!root) return true;
        if (root.val <= left || root.val >= right) return false;
        let leftCheck = root.left ? isValid(root.left, left, root.val) : true;
        let rightCheck = root.right ? isValid(root.right, root.val, right) : true;
        return leftCheck && rightCheck;
    };
    return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

let a1 = [2, 1, 3];
console.log(a1);
let root1 = createTree(a1);
console.log(isValidBST(root1));

let a2 = [5, 1, 4, null, null, 3, 6];
console.log(a2);
let root2 = createTree(a2);
console.log(isValidBST(root2));
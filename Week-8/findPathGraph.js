const getAdjMat = function (n, vertices) {
  let adj = new Array(n).fill().map(() => new Set());
  for (const [from, to] of vertices) {
    adj[from].add(to);
    adj[to].add(from);
  }
  return adj;
};

const findValidPath = function (n, adj, source, destination) {
  //Breadth First Search approach
  let que = [source];
  let seen = new Set([source]);
  while (que.length) {
    let node = que.pop();
    if (node === destination) return true;
    for (const no of adj[node]) {
      if (seen.has(no)) continue;
      seen.add(no);
      que.unshift(no);
    }
  }
  return seen.size === n;
};

let n1 = 3,
  vert1 = [
    [0, 1],
    [1, 2],
    [2, 0],
  ],
  source1 = 0,
  destination1 = 2;

let adj1 = getAdjMat(n1, vert1);

console.log(adj1);

console.log(findValidPath(n1, adj1, source1, destination1));

let n2 = 6,
  vert2 = [
    [0, 1],
    [0, 2],
    [3, 5],
    [5, 4],
    [4, 3],
  ],
  source2 = 0,
  destination2 = 5;

let adj2 = getAdjMat(n2, vert2);

console.log(adj2);

console.log(findValidPath(n2, adj2, source2, destination2));

const allPathSourceTargetBFS = function (graph) {
  //BREADTH FIRST SEARCH
  const que = [[0, [0]]];
  const res = [];
  while (que.length) {
    const [node, path] = que.shift();
    if (node === graph.length - 1) res.push(path);
    for (const no of graph[node]) {
      que.push([no, [...path, no]]);
    }
  }
  return res;
};

const dfs = function (graph, node, path, res) {
  if (node === graph.length - 1) res.push(path);
  for (const no of graph[node]) {
    dfs(graph, no, [...path, no], res);
  }
};

const allPathSourceTargetDFS = function (graph) {
  //DEPTH FIRST SEARCH
  const res = [];
  dfs(graph, 0, [0], res);
  return res;
};

let graph1 = [[1, 2], [3], [3], []];
let graph2 = [[4, 3, 1], [3, 2, 4], [3], [4], []];

process.stdout.write("Input Graph1: ");
console.log(graph1);
process.stdout.write("Output BFS: ");
console.log(allPathSourceTargetBFS(graph1));
process.stdout.write("Output DFS: ");
console.log(allPathSourceTargetDFS(graph1));
console.log("");

process.stdout.write("Input Graph2: ");
console.log(graph2);
process.stdout.write("Output BFS: ");
console.log(allPathSourceTargetBFS(graph2));
process.stdout.write("Output DFS: ");
console.log(allPathSourceTargetDFS(graph2));
console.log("");
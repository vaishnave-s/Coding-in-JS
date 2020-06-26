//Directed graphs are graphs that do have a direction between vertices. 
function DirectedGraph() {
    this.edges = {};
}
DirectedGraph.prototype.addVertex = function(vertex) {
    this.edges[vertex] = {};
}
DirectedGraph.prototype.addEdge = function(origVertex, destVertex, weight) {
    if (weight === undefined) {
        weight = 0;
    }
    this.edges[origVertex][destVertex] = weight;
}

DirectedGraph.prototype.removeEdge = function(origVertex, destVertex) {
    if (this.edges[origVertex] && this.edges[origVertex][destVertex] != undefined) {
        delete this.edges[origVertex][destVertex];
    }
}

DirectedGraph.prototype.removeVertex = function(vertex) {
    for (var adjacentVertex in this.edges[vertex]) {
        this.removeEdge(adjacentVertex, vertex);
    }
    delete this.edges[vertex];
}

// A graph can be traversed in multiple ways. The two most common approaches are
// breadth-first search and depth-first search.

// Breadth-first search (BFS) refers to a search algorithm in a graph that focuses on
// connected nodes and their connected nodes in order.

DirectedGraph.prototype.traverseBFS = function(vertex, fn) {
    var queue = [],
        visited = {};

    queue.push(vertex);
    while (queue.length!=0) {

        vertex = queue.shift();

        if (!visited[vertex]) {
            visited[vertex] = true;
            fn(vertex);

            for (var adjacentVertex in this.edges[vertex]) {
                queue.push(adjacentVertex);

            }
        }
    }
}
var directed_graph = new DirectedGraph();
directed_graph.addVertex("A");
directed_graph.addVertex("B");
directed_graph.addVertex("C");
directed_graph.addVertex("D");
directed_graph.addEdge("A", "B", 1);
directed_graph.addEdge("A", "D", 1);
directed_graph.addEdge("D", "B", 1);
directed_graph.addEdge("B", "C", 2);
directed_graph.addEdge("C", "A", 3);
console.log(directed_graph.edges);
console.log("traverseBFS")
directed_graph.traverseBFS("B", function(vertex){
    console.log(vertex)
});

//Depth-first search (DFS) refers to a search algorithm in a graph that focuses on traversing
// deep into one connection before visiting the other connections.

DirectedGraph.prototype.traverseDFS = function(vertex, fn) {
    var visited = {};
    this._traverseDFS(vertex, visited, fn);
}

DirectedGraph.prototype._traverseDFS = function(vertex, visited, fn) {
    visited[vertex] = true;
    fn(vertex);
    for (var adjacentVertex in this.edges[vertex]) {
        if (!visited[adjacentVertex]) {
					// console.log(visited)
            this._traverseDFS(adjacentVertex, visited, fn);
        }
    }
}

console.log("traverseDFS")
directed_graph.traverseDFS("B", function(vertex){
    console.log(vertex)
});
function _isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function _extractMin(Q, dist) {
    var minimumDistance = Infinity,
        nodeWithMinimumDistance = null;
    for (var node in Q) {
        if (dist[node] <= minimumDistance) {
            minimumDistance = dist[node];
            nodeWithMinimumDistance = node;
        }
    }
    return nodeWithMinimumDistance;
}

// Dijikstra's Algorithm
// 1. Find the cheapest node
// 2. Update the cost of the neighbours of that node.
// 3. Repeat until you've done this for every node.
// 4. Calculate the final path.

DirectedGraph.prototype.Dijkstra = function(source) {
    // create vertex set Q
    var Q = {},
        dist = {};
    for (var vertex in this.edges) {
        // unknown distances set to Infinity
        dist[vertex] = Infinity;
        // add v to Q
        Q[vertex] = this.edges[vertex];
    }
    // Distance from source to source init to 0
    dist[source] = 0;

    while (!_isEmpty(Q)) {
        var u = _extractMin(Q, dist); // get the min distance

        // remove u from Q
        delete Q[u];

        // for each neighbor, v, of u:
        // where v is still in Q.
        for (var neighbor in this.edges[u]) {
            // current distance
            var alt = dist[u] + this.edges[u][neighbor];
            // a shorter path has been found
            if (alt < dist[neighbor]) {
                dist[neighbor] = alt;
            }
        }
    }
    return dist;
}

var digraph1 = new DirectedGraph();
digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addVertex("D");
digraph1.addEdge("A", "B", 1);
digraph1.addEdge("B", "C", 1);
digraph1.addEdge("C", "A", 1);
digraph1.addEdge("A", "D", 1);
console.log(digraph1);
// DirectedGraph {
// V: 4,
// E: 4,
// edges: { A: { B: 1, D: 1 }, B: { C: 1 }, C: { A: 1 }, D: {} }}
digraph1.Dijkstra("A"); // { A: 0, B: 1, C: 2, D: 1 }
DirectedGraph.prototype.topologicalSortUtil = function(v, visited, stack) {
    visited.add(v);

    for (var item in this.edges[v]) {
        if (visited.has(item) == false) {
            this.topologicalSortUtil(item, visited, stack)
        }
    }
    stack.unshift(v);
};

DirectedGraph.prototype.topologicalSort = function() {
    var visited = new Set(),
        stack = [];


    for (var item in this.edges) {
        if (visited.has(item) == false) {
            this.topologicalSortUtil(item, visited, stack);
        }
    }
    return stack;
};

var g = new DirectedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('B', 'A');
g.addEdge('D', 'C');
g.addEdge('D', 'B');
g.addEdge('B', 'A');
g.addEdge('A', 'F');
g.addEdge('E', 'C');
var topologicalOrder = g.topologicalSort();
console.log(g);
// DirectedGraph {
// V: 6,
// E: 6,
// edges:
//  { A: { F: 0 },
//    B: { A: 0 },
//    C: {},
//    D: { C: 0, B: 0 },
//    E: { C: 0 },
//    F: {} } }
console.log(topologicalOrder); // [ 'E', 'D', 'C', 'B', 'A', 'F' ]


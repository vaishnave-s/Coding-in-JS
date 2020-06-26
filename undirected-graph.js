//Undirected graph:
//graphs that do not have a direction between edges.
function UndirectedGraph() {
    this.edges = {};
}

UndirectedGraph.prototype.addVertex = function(vertex) {
    this.edges[vertex] = {};
}

UndirectedGraph.prototype.addEdge = function(vertex1, vertex2, weight) {
    if (weight == undefined) {
        weight = 0;
    }
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
}

UndirectedGraph.prototype.removeEdge = function(vertex1, vertex2) {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2] != undefined) {
        delete this.edges[vertex1][vertex2];
    }
    if (this.edges[vertex2] && this.edges[vertex2][vertex1] != undefined) {
        delete this.edges[vertex2][vertex1];
    }
}

UndirectedGraph.prototype.removeVertex = function(vertex) {
    for (var adjacentVertex in this.edges[vertex]) {
        this.removeEdge(adjacentVertex, vertex);
    }
    delete this.edges[vertex];
}
var graph = new UndirectedGraph();
for(var i=1; i<6; i++){
	graph.addVertex(i);
}
graph.addEdge(2, 3, 8);
graph.addEdge(3, 4, 10);
graph.addEdge(4, 5, 100);
graph.addEdge(1, 5, 88);
console.log("Before removing vertex:")
console.log(graph.edges)
graph.removeVertex(5);
graph.removeVertex(1);
graph.removeEdge(2, 3);
console.log("After removing vertex 1 & 5:")
console.log(graph.edges)
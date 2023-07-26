class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(v) {
        if (!this.adjacencyList[v]) {
            this.adjacencyList[v] = [];
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
        }
    }

    removeVertex(v) {
        if (this.adjacencyList[v]) {
            while (this.adjacencyList[v].length) {
                const vertex = this.adjacencyList[v].pop();
                this.removeEdge(v, vertex);
            }
            delete this.adjacencyList[v];
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex('a');
myGraph.addVertex('b');
myGraph.addVertex('c');

myGraph.addEdge('a', 'b');
myGraph.addEdge('b', 'c');
myGraph.addEdge('a', 'c');

myGraph.removeVertex('a');

console.log(myGraph);
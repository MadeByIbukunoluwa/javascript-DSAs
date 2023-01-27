



class Graph {
    constructor() {
        this.AdjacencyList = {}
    }
    addVertex(vertex) {
       if (!this.AdjacencyList[vertex]) this.AdjacencyList[vertex] = [];
        return this
    }
    //My Implementation
    // addEdge(vertex1,vertex2){
    //     if(this.AdjacencyList[vertex1]) this.AdjacencyList[vertex1].push(vertex2)
    //     return this
    // }
    addEdge(v1,v2) {
        this.AdjacencyList[v2].push(v1)
        this.AdjacencyList[v1].push(v2)
    }
    removeEdge(vertex1,vertex2) {
        // //go to vertex remove edge
        // //go to edge remove vertex 
        // My implementation, mutates the original array
        //  this.AdjacencyList[vertex1].splice(this.AdjacencyList[vertex1].indexOf(vertex2),1)
        //  this.AdjacencyList[vertex2].splice(this.AdjacencyList[vertex2].indexOf(vertex1),1)
        //  return this 
        this.AdjacencyList[vertex1] = this.AdjacencyList[vertex1].filter(v => v !== vertex2)
        this.AdjacencyList[vertex2] = this.AdjacencyList[vertex2].filter(v => v !== vertex1)
        return this 
    }
    removeVertex(vertex) {
        //My implementation 
        // this.AdjacencyList[vertex].map((edge) => this.removeEdge(edge,vertex))
        // this.AdjacencyList[vertex] = []
        if (!this.AdjacencyList[vertex]) throw Error(`No vertex with the name ${vertex} was found`)
             while (this.AdjacencyList[vertex].length) {
               let adjacentVertex = this.AdjacencyList[vertex].pop();
               this.removeEdge(adjacentVertex, vertex);
             }
             delete this.AdjacencyList[vertex];
        return this 
    }
}

let graph = new Graph()
graph.addVertex('Lagos')
graph.addVertex('Abuja')
graph.addVertex('Anambra')
graph.addEdge('Lagos','Abuja')
graph.addEdge('Anambra','Abuja')

graph.removeEdge('Lagos','Abuja')
graph.removeVertex('Lagos')

console.log(graph)
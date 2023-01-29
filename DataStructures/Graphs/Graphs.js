



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
    DFSRecursive(start) {
      const result = [];
      const visited = {};
      const adjacencyList = this.AdjacencyList;
      
      (function dfs(vertex) {
        if (!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach((neighbour) => {
          if (!visited[neighbour]) {
            return dfs(neighbour);
          }
        });
      })(start);
      return result;
    }
    DFSIterative(start) {
        const stack = [start];
         const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true 
        while(stack.length) {
            console.log(stack)
            currentVertex = stack.pop()
            result.push(currentVertex)
            this.AdjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true
                    stack.push(neighbour)
                }
            })
        }
        return result;
    }
    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentv
        while(queue.length) {
            currentVertex = queue.shift()
            result.push(currentVertex)
            this.AdjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true 
                    queue.push(neighbour);
                }
            })
        }
        return result 
    }
}

let graph = new Graph()
// graph.addVertex('Lagos')
// graph.addVertex('Abuja')
// graph.addVertex('Anambra')
// graph.addEdge('Lagos','Abuja')
// graph.addEdge('Anambra','Abuja')

// graph.removeEdge('Lagos','Abuja')
// graph.removeVertex('Lagos')
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('B','D')
graph.addEdge('C','E')
graph.addEdge('D','E')
graph.addEdge('D','F')
graph.addEdge('E','F')

console.log(graph)
console.log(graph.DFSRecursive('A'))
console.log(graph.DFSIterative('A'))
console.log(graph.breadthFirst('A'))
/*
Representation 1: Adjacency List (MOST IMPORTANT)

A: [B, C]
B: [A, D]
C: [A]
D: [B]
 */

class Graph{
    constructor(){
        this.adjList = {}
    }

    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = []
        }
    }

    addEdge(v1,v2){
        this.adjList[v1].push(v2)
        this.adjList[v2].push(v1)
    }
}

const graph = new Graph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","D")

console.log("Graph: ", graph.adjList);

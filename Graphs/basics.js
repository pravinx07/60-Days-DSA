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

// console.log("Graph: ", graph.adjList);


/*
Representation 2: Adjacency Matrix
use 2d matrix
    A B C
A  [0 1 1]
B  [1 0 0]
C  [1 0 0]
*/

const nodes = ["A","B","C"];
const size = nodes.length;


// create 2d matrix with all zeros
const matrix = Array.from({length:size},()=>Array(size).fill(0))

// add connection A -> B (0 -> 1)
matrix[0][1] = 1;
matrix[1][0] = 1; 

//  add connection A -> C (0 -> 2)
matrix[0][2] = 1
matrix[2][0] = 1;

console.log(matrix);

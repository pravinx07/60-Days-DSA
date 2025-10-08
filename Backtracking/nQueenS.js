/*
51. N-Queens

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

 */

function nQueens(n){
    let res = [];

    let board = Array.from({length:n},()=> Array(n).fill("."))
    

    let backtrack = (board , row, colSet, digSet, antiDigSet) =>{
        if(row == n){
           res.push(transformBoard(board))
            
            
        }
        for(let col = 0; col < n; col++){
         if(colSet.has(col) || digSet.has(row - col) || antiDigSet.has(row + col)){
            continue;
         }

         board[row][col] = "Q";
         colSet.add(col);
         digSet.add(row - col);
         antiDigSet.add(row + col)
         backtrack(board , row + 1, colSet, digSet , antiDigSet)

         board[row][col] = ".";
         colSet.delete(col);
         digSet.delete(row - col);
         antiDigSet.delete(row + col)
        }

    }

    backtrack(board , 0, new Set(), new Set(), new Set())

    return res;
}

let n = 4
console.log(nQueens(n));


function transformBoard(board) {
   return board.map((row) => row.join("")) 
}
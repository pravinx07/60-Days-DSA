function subsets(arr){
    let res = []
    let n = arr.length;
    

    function backtrack(path, start){
        res.push([...path])
        for(let i = start; i < n; i++){
            path.push(arr[i])
            backtrack(path, i+1)
            path.pop();
        }
    }

    backtrack([],0)

    return res;
}

let arr = [1,2,3]
console.log("Subsets: ", subsets(arr));

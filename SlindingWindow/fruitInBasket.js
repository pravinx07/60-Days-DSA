/*You are visiting a farm that has a row of trees. Each tree produces 
a specific type of fruit represented by an integer.
You have two baskets, and each basket can hold only one type of fruit.
You want to pick the maximum number of fruits in a row starting from any tree,
 moving only to the right, and collecting exactly one fruit per tree. */


 function maxFruitInBasket(arr){
    let l = 0
    let maxLen = 0
    let basket = new Map()
    for(let r = 0; r < arr.length; r++){
        let fruit = arr[r]
        basket.set(fruit, (basket.get(fruit) || 0) + 1)
        while(basket.size > 2){
            let leftFruit = arr[l]
            basket.set(leftFruit, basket.get(leftFruit) - 1)
            if(basket.get(leftFruit) === 0){
                basket.delete(leftFruit)
            }
            l++
        }
        maxLen = Math.max(maxLen, r - l + 1)
    }
    return maxLen;
 }

 let arr = [1,2,1,2,3]
 let arr2 = [3,3,3,1,1,2,1,2,3,3,4]
 console.log(maxFruitInBasket(arr2));
 
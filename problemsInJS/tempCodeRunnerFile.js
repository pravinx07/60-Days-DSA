function reversedStr(str,start,end){
  // let start = 0
  // let end = str.length-1

  while(start < end){
    let temp = str[start]
    str[start] = str[end]
    str[end] = temp
    start++
    end--
  }

}
let arr = ["p","r","a","v","i","n"]
let result = reversedStr(arr,0, arr.length-1)

console.log("reversed String is: ",arr);
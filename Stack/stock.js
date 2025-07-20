// 901. Online Stock Span

class StockSpanner{
    constructor(){
         
        this.stack = []
    }

    next(price){
        let span = 1
       while(this.stack.length && this.stack[this.stack.length - 1][0] <= price){
        span += this.stack.pop()[1]
       }

       this.stack.push([price, span])
       return span
       }
}


let s = new StockSpanner();
console.log(s.next(100)); // 1
console.log(s.next(80));  // 1
console.log(s.next(60));  // 1
console.log(s.next(70));  // 2
console.log(s.next(60));  // 1
console.log(s.next(75));  // 4
console.log(s.next(85));
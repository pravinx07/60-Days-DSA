/*
860. Lemonade Change
Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays,
 return true if you can provide every customer 
 with the correct change, or false otherwise.

Example 1:

Input: bills = [5,5,5,10,20]
Output: true
Explanation: 
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.
*/

function lemanodeChange(bills){
    let five = 0, ten = 0;
    for(let i = 0; i < bills.length; i++){
        if(bills[i] === 5){
            five++
        }else if(bills[i] === 10){
            if(five === 0)return false;
            five--;
            ten++;
        }else{
            if(five > 0 && ten > 0){
                ten--;
                five--;
            }else if(five >= 3){
                five -= 3
            }else {
                return false
            }
        }
    }
    return true;

}

let bills = [5,5,5,10,20]
let bills2 = [5,5,5,20];
console.log(lemanodeChange(bills2));

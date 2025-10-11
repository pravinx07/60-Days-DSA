/*
57. Insert Interval

Insert newInterval into intervals
 such that intervals is still sorted in ascending order 
 by starti and intervals still 
 does not have any overlapping intervals 
 (merge overlapping intervals if necessary).
Return intervals after the insertion.
Note that you don't need to modify intervals in-place.
 You can make a new array and return it.
 Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 */

 let insertInterval = (interval, newInterval) => {
    let ans = [];
    let n = interval.length;

    let i = 0;

    // left non overlapping interval
    while(i < n && interval[i][1] < newInterval[0]){
        ans.push(interval[i])
        i++;
    }

    // overlapping interval
    while(i < n && interval[i][0] <= newInterval[1]){
        newInterval[0] = Math.min(newInterval[0], interval[i][0])
        newInterval[1] = Math.max(newInterval[1], interval[i][1])
        i++
    }
    ans.push(newInterval)

    // right non overlapping interval
    while( i < n){
        ans.push(interval[i])
        i++
    }
    return ans;



 } 
 let interval = [[1,3],[6,9]];
 let newInterval = [2,5];
 console.log(insertInterval(interval, newInterval));
 
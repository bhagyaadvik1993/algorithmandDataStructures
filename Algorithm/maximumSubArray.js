function maximumSubArray(arr){
    let currentSum = 0;
    let maxSum = arr[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;
    for(let i = 0; i< arr.length; i++){
        currentSum += arr[i];
        if(currentSum > maxSum){
            maxSum = currentSum;
            end = i;
            start = tempStart;
        }
        //maxSum = Math.max(currentSum, maxSum);
        
        if(currentSum < 0){
            currentSum = 0;
            tempStart = i + 1;
        }
    }
    return {
        maxSum : maxSum,
        array: arr.slice(start, end+1),
    };
}
let ans = maximumSubArray([-2,1,-3,4,-1,2,1,-5,4]);

console.log("sum" + ans.maxSum);
console.log("array" + ans.array);
//Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.
// Input: nums = [2, 7, 11, 15], target = 9

// Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)

function targetSum(num, target){

    let map = {};
    let complement = 0;

    for(let i = 0; i < num.length ; i++){
        complement = target - num[i];
        //console.log(complement);
        if(map[num[i]] != undefined){
            return [map[num[i]], i];
        }
        map[complement]= i;
        //console.log("map",map[i]);
    }
        return "not Found";
    

    // for(let i =0; i< num.length; i++){
    //     for(let j = 1;j< num.length; j++){
    //         if(num[i] + num[j] === target){
    //             return [i,j];
    //         }
    //     }

    //

}

let ans = targetSum([2, 7, 11, 15], 9);
console.log(ans);

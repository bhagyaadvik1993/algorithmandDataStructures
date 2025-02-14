// function moveZeros(arr){
//     let newArr =[];
//     let count = 0;
//     for(let i =0; i< arr.length; i++){
//         if(!(arr[i] === 0)){
//             newArr.push(arr[i]);
//         }else{
//             count++;
//         }
//     }
//     while(count >0){
//         newArr.push(0);
//         count--;
//     }
//     return newArr;

// }

// console.log(moveZeros([0,1,0,3,12]));
function moveZeroes(nums) {
    let j = 0; // Slow pointer (tracks position for next non-zero)

    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap non-zero with first zero
            j++;
        }
    }
}

// Example usage
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
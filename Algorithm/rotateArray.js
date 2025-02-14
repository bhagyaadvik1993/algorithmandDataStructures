function rotateArray(nums, k){
    let newArr = nums.slice(nums.length - k, nums.length);
    let newArr2 = nums.slice(0, nums.length - k);
    return [...newArr, ...newArr2];
}

console.log(rotateArray([1,2,3,4,5,6,7], 3))
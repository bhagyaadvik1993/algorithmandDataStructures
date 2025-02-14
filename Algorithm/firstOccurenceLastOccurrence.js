function firstAndLastOccurence(nums, target){
    function firstBound(isFirst){
        
        let left =0;
        let right= nums.length - 1;
        let bound = -1;
        while(left <= right){
            //console.log("hi");
            let mid = Math.floor((left + right) /2);
           

            if(nums[mid] === target){
                bound = mid;
                if(isFirst){
                    right = mid - 1;
                }else{
                    left = mid + 1;
                }
                
            }else if(nums[mid] > target){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
            console.log(right,left);
        }
        return bound;
    }

    let first = firstBound(true);
    let second = firstBound(false);

    return [first, second];
   //return first;

}

console.log(firstAndLastOccurence([1,2,3,4,5,5,6,7], 5));
var containsDuplicate = function(nums) {
    let map = [];
for(let i =0 ; i< nums.length; i++){
    if(map[nums[i]]){
        return true;
    }
    map.push(nums[i]);

}
return false;
    
};
function reapetedNumber(num){
    let map = {};
    let count = 0;
    for(let i = 0 ; i< num.length; i++){
        if(map[num[i]] != undefined){
            return num[i];
        }
        map[num[i]] = count 
        count++;
    }
    return undefined;
}

console.log(reapetedNumber([2,5,5,1,2,3,5,1,2,4]));
//console.log(reapetedNumber([2,1,1,2,3,5,1,2,4]));
//console.log(reapetedNumber([2,3,4,5]));
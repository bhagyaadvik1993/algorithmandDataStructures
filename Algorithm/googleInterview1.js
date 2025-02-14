// [1,2,4,6] , Sum = 8
// [2,3,4,4], Sum = 8

//Naive
function findPairsEqualSum(arr, sum){
    let newArr = [];
    for(let i = 0 ; i< arr.length; i++){
        for(j = i + 1; j < arr.length;j++){
            if(( sum - arr[i]) === arr[j]){
                newArr = [arr[i], arr[j]];
            }
        }

    }
    return newArr;
}

//console.log(findPairsEqualSum([1,2,4,5], 8));

//better

function findPairsEqualSumBetter(arr, sum){
    let map = {};
    let newArr = [];
    for(let i = 0; i< arr.length; i++){
        let complement = sum - arr[i];
        if(map[arr[i]]){
            newArr = [arr[i], complement];
        }

        map[complement] = true;
        
    }
    return newArr.length > 0 ? newArr : "not found";
}

console.log(findPairsEqualSumBetter([1,2,3,4], 8));
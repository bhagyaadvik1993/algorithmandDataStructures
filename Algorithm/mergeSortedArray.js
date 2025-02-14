function mergeSortedArrays(arr1, arr2){
    let sortedArr = [];
    let firstElement = arr1[0];
    let secondElement = arr2[0];
    let i = 1;
    let j = 1;
    //let index = 0;
    while(firstElement || secondElement){
        console.log(firstElement, secondElement)
        if(!secondElement || firstElement < secondElement){
            // sortedArr[index] = secondElement;
            // index++;
            sortedArr.push(firstElement);
           
        firstElement = arr2[i];
            i++;
        }else{
            // sortedArr[index] = firstElement;
            // index++;
            sortedArr.push(secondElement);
            
            secondElement = arr1[j];
            j++;
        }
    }

    // for(let i = firstlength; i >=0; i--){
    //     for(let j = secondLength; j>= 0; j--){
    //         if(arr2[j] < arr1[i]){
    //             let temp = arr1[i];
    //             arr1[i] = arr2[j];
    //             arr2[j] = temp;
    //         }
    //     }
    // }
    //return [...arr1, ...arr2];
    return sortedArr;
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));
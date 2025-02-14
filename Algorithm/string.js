//Given a string s, find the length of the longest substring without repeating characters.

//Input: s = "abcabcbb"

//Output: 3 (the longest substring is "abc")

// function largestSubstring(str){
//     let arr = [];
//     arr = str.split(' ');

    
//     let charLength = arr[0].length;
//     let word;
//     console.log(charLength);

//     for(let i = 0; i< arr.length; i++){
//         if( charLength < arr[i].length){
//             charLength = arr[i].length;
//             word = arr[i];
//         }

//     }
//     return word;
// }

function longestSubstringWithoutrepeat(str){
    

    let subArr = [];

    for(let i = 0; i< str.length; i++){
        if(!subArr.includes(str[i])){
            subArr.push(str[i]);
        }
        //console.log(subArr);
         
    }

    return subArr.join('');

}
let ans = longestSubstringWithoutrepeat("abcabcbb");
console.log(`The longest substring is ${ans}`);

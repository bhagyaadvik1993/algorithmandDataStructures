//Given a string s, find the length of the longest substring without repeating characters.

//Input: s = "abcabcbb"

//Output: 3 (the longest substring is "abc")

function longestSubstringWithoutrepeat(str){
let map = new Map();

let left = 0;
let maxLength = 0;
let startIndx = 0;

for(let right=0; right< str.length; right++){

    if(map.has(str[right])){
        left = str[right] + 1;
    }

    map.set(str[right], right);

    if(maxLength < (right - left + 1)){
        maxLength = (right - left + 1)
        startIndx = left;
    }

}
return str.substring(startIndx, maxLength + startIndx);
}
console.log(longestSubstringWithoutrepeat("abcabcbb"));
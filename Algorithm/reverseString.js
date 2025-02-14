function reverse(str){
    let newStr = [];
   // let index = 0;
    for(let i = str.length-1; i>= 0; i--){
        newStr.push(str[i]);
        //index++;
    }
    return str.split('').reverse().join('');
    //return newStr.join('');
}
console.log(reverse("hello bhagya"));

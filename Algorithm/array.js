const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['x', 'y', 'd'];

function findEquals(){
    let map = {};
    for(let i =0 ; i< arr1.length; i++){
        if(!map[arr1[i]]){
            map[arr1[i]] = true;
        }
    }
    //console.log(map);

    for(let j = 0; j< arr2.length; j++){
        if(map[arr2[j]]){
            console.log('found');
        }
    }
}
// function findEquals(){
//     return arr1.some(item => arr2.includes(item));
// }

findEquals();
// Input
// 6
// visit food //home//food
// visit menu //home//food//menu
// back  //home//food =>history=>//menu
// visit diet //home//food//diet
// forward//home//food//diet//menu
// back //home//food//diet


// Input
// 5
// visit about //home//about
// visit contact  //home//about//contact
// back //home//about   histoty=>//contact
// forward //home//about//contact
// visit help //home//about//contact//help

function stackingPath(str){
    let path = "";
    let stack = [];
    let historyStack = [];

    stack.push('//home');
  
        for(let i =0; i< str.length; i++){
            console.log(stack);
            if(str[i] == 'back'){
                let remove = stack.pop();
                historyStack.push(remove);
            }else if(str[i] == 'forward'){
                stack.push(historyStack.pop());
            }else{
                stack.push(str[i]);
            }

        }    
        return stack.join('//');   
  
}

console.log(stackingPath(['about', 'contact']));

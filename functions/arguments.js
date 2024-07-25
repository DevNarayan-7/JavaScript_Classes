function addNumbers(){
    let sum = 0;
    for(i = 0; i < arguments.length; i++){
      sum = sum+arguments[i];
    }
    return sum;
}

console.log(addNumbers(1, 3, 5, 6));
console.log(addNumbers( 6));
console.log(addNumbers(1, 3, 6));
console.log(addNumbers(13, 33, 2, 2 ,2));

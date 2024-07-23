// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }               1
//     /* (picking the memory address)    2            4    */
// for([initialExpression/declaration]; [condition]; [changer]){
//       //body --3
// }

// if score hits 5, don't print anything after that
// remove previous demand, if score hits 5, ship printing 5 but rest value
let userScore = 10
let minValue = 0
for(userScore; userScore >= minValue; userScore = userScore - 1){
    // if(userScore == 5){
    //     break;
    // }

    if(userScore == 5){
        continue
    }
    console.log(`UserScore is ${userScore}`);
}

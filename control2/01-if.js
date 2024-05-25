let score = 120;
let life = 3;
let bullets = 1000;
console.log("Welcome to the game");
if(score >= 100){
    console.log("You get a life");
    score = score-100;
    life = life + 1;
     bullets = 2000;
    console.log(`Your bullets ${bullets}`);
}else{
    console.log("You don't get a life");
}


console.log(`Your score is ${score} and my life ${life} and bullets ${bullets}`);

// short hands

let balance = 500

if(balance > 100) console.log("Balance is above 500");

// build a rating system for pizzahut

// 1 start - poor
// 2 start - emm
// 3 start - average
// 4 start - cool
// 5 start - great
// 6 start - awesome 
// 7 start - nailed it


// let start = 3;

// if(start = 1){
//     console.log("Poor");
// }

let num = "1";

num = parseInt();

console.log(typeof num);


let getStartFromUser = "9"
let startInNumber = parseInt(getStartFromUser)

if(startInNumber == 1){
    console.log("poor");
}else if(startInNumber == 2){
    console.log("emm, ok");
}else if(startInNumber == 3){
    console.log("average");
}else if (startInNumber == 4){
    console.log("cool")
}else if (startInNumber == 5){
    console.log("great")
}else if (startInNumber == 6){
    console.log("awesome")
}else if (startInNumber == 7){
    console.log("Nailed it !!!")
}else {
    console.log("I don't know that rating !!!")
}
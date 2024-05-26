// switch(expression) {
//     case value1:
//         statement1;
//         statement2;

//     case value2:
//         statement3;
//         statement4;
// }


let getStarFromUser = "2"
let starInNumber = parseInt(getStarFromUser)

switch (starInNumber) {
    case 1:
        console.log("poor");
        break;
    case 2:
        console.log("em, ok");
        break;
    case 3:
        console.log("average");
        break;
    case 4:
        console.log("cool");
        break;
    case 5:
        console.log("great");
        break;
    case 6:
        console.log("awesome");
        break;
    case 7:
        console.log("Nailed it !!");
        break;

    default: 
       console.log("I don't know what the rating is ")
}
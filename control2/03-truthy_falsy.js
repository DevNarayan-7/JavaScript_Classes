// truthy and falsy 

/*
falsy
---

false
0  (-0 and BigInt 0n)
"" -- emply string
null
undefined
NaN

*/


///login system
/*
let email = ""

if(email){
    console.log("Please enter your password");
}else{
    console.log("Please sign in with your email");
}

*/

// if user provides email, password, then allow login, else ask for it

const email = ""
const password = ""
if (email) {
    if(password){
    console.log("welcome to the app");
    }else{
        console.log("please enter password");
    }
}else{
    console.log("Please enter your email");
}


//logical operation
// && --> and ;  || => OR


if (email && password) {
    console.log("welcome to the app");
}else{
    console.log("Please enter email and password");
}


// allow user to signin with google or github

const googleLoginToken = ""
const githubLoginToken = ""

if (googleLoginToken || githubLoginToken) {
    console.log("Welcome to the app");
}else{
    console.log("Please login to view your account");
}


let age = 19
const willYougetDrivingLicence = false


if(age >= 18){
    console.log("You will get the driving licence");
    willYougetDrivingLicence = true;
}else {
    console.log("You are not eligible for driving licence");
    willYougetDrivingLicence = false;
}

//terniary 

const getDrivingLicence = age >= 18 ? "true part" : "false"


let loading = false;
if(loading){
    return "loading..."
}

console.log("show the carts to user");

// ternary
loading ? "show loading spinner" : " show card to user"


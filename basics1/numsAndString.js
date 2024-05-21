/*
const firstName = "Alien"
const lastName = 'SpaceShip'

console.log(firstName+' '+lastName);
//template literal
console.log(`my first name is ${firstName} and last name is ${lastName}`);

const userName = new String("AlienSphipcom")
console.log(userName[0]);
console.log(userName.length)
console.log(userName.charAt(3))
console.log(userName.substring(1,10));

let str1 = "Hello";
let str2 = "World";
let str3 = "!"
console.log(str1.concat(" ", str2,str3)); // "Hello World!"

let str = "Hello World";
console.log(str.split(" "));

let email = "alien@gmail.com"

email = email.replace("alien", "Ali");
console.log(email)

const sentence = "The quick brown fox jumps over the lazy dog."

const word = "tHe"
console.log(
    `The word "${word}" ${
        sentence.includes(word)? 'is' : 'is not'} in the sentence`
     )      
*/


// NUMBER

const num = new Number(5.342534)
console.log(num.toFixed(2));// adding precion upto 2 decimal

const subscribers = 100000;
console.log(subscribers.toLocaleString());//100,000 --output

console.log(Math.floor(Math.random()*10))+1


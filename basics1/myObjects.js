const user = {
    username : "Ali",
    name : "AlienSpace",
    email : "alien123@gmail.com",
    age : 25,
    isAdmin : false,
    isLoggedIn : true,
    tea : ["lemon", "peach", "ginger"],
    address : {
        city : "Hyderabad",
        state : "Telangana"
    }
}


const anotherUser = user
//2 ways of accessing Object
// console.log(user.age);
// console.log(user['age']);
// console.log(user.tea[1])
// console.log(user.address.state);
// console.log(user.address['state']);
// console.log(user['address']['state']);


user.email = "ali123@gmail.com"
// console.log(user)
// console.log(anotherUser)

delete user.isAdmin
// console.log(user)
// console.log(anotherUser)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

console.log(Object.keywords);
console.log(user.hasOwnProperty('tea'));


function fun() {
    console.log("Called the function fun");

    return function cleanUp() {
        console.log("Cleaning up the resourse");
    }
}

const result = fun();
console.log(result);
result();


function processArray(array, fn){
    for(let i =0; i< array.length; i++){
     console.log( "array at index "+ i + "for the function fn " +fn(array[i]));
    }
}





processArray([2,3,4,5,6], function cube(x){ return x*x*x})



function test(a){
    console.log("working...");
}

test(processArray)
function checkFact(n) {
    if(n == 0) return 1;
   return n*checkFact(n-1)
   
}

let n = 5;
const result = checkFact(1)
console.log(`factorial of ${n} is `+ result);

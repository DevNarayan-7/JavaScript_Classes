function f(n) {
    if(n==0) return 1;// base case
    const result = n * f(n-1)
    return result;
}

console.log(f(5));
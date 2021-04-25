const stash = {}; 
const fib = (n)=>{
    if(n ===0) return 0;
    if(n===1) return 1;
    if(stash[n]){
        console.log("from stash ",n);
        return stash[n];
    }
    console.log("calculated ",n)
    const res =  fib(n-1) + fib(n-2);
    stash[n] = res;
    return res;
}
console.time("start")
console.log(fib(1000))
console.timeEnd("start")
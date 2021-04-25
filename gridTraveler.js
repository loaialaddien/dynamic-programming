const cache = {};
const gridTraveler = (n,m)=>{
    if(n===0 || m === 0) return 0;
    if(n===1 && m===1)return 1;
    if(cache[`${n},${m}`] || cache[`${m},${n}`]) return cache[`${n},${m}`]|| cache[`${m},${n}`];
    res = gridTraveler(n-1,m) + gridTraveler(n,m-1);
    cache[`${n},${m}`] = res;
    return res
}
console.log(gridTraveler(1,0)) 
console.log(gridTraveler(3,0)) 
console.log(gridTraveler(3,3)) 
console.log(gridTraveler(18,18)) 
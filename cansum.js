const memo = {};
const canSum = (sum,arr)=>{
    if(memo[sum]) return memo[sum];
    if(sum===0) return true;
    if(sum < 0) return false;
    for (const i of arr) {
        if( canSum(sum-i,arr)){
            memo[sum-i] = true
            return true
        }   
    }
    memo[sum-i] = false;
    return false;
}

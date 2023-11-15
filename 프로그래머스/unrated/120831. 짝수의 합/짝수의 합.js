function solution(n) {
    const result = [];
    for(let i = 0; i <= n; i++){
        if(i%2 ===0) result.push(i);
        
        if(i === n){
            return result.reduce((acc, cur) => acc + cur);
        }
    }
}
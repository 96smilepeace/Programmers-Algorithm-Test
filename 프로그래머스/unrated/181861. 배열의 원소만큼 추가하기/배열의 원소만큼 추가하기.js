function solution(arr) {
    const result = [];
    
    for(const num of arr){
        for(let i = 0; i < num; i++){
            result.push(num)
        }
    }
    return result;
}
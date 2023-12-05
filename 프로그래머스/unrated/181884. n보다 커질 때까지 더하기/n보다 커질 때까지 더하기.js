const solution = (numbers, n) =>numbers.reduce((acc, cur) => {
        if(acc > n){
            return acc;
        }
        return acc + cur
    },0);
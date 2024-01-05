const solution = (n) => 
    Array.from({length : n}, (_, idx) => idx + 1)
    .filter(v => n%2===0 ? v%2===0 : v%2!==0)
    .reduce((acc, cur) => n%2===0 ? acc + (cur ** 2) : acc + cur, 0);

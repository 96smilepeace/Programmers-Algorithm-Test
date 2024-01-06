// const solution = (my_string, n) => [...my_string].map(v =>  Array.from({length : n}, ()=>v)).flat().join("");
const solution = (my_string, n) => [...my_string].map(v => v.repeat(n)).join("");
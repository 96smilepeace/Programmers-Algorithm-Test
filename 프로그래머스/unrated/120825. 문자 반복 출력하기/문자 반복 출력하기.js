const solution = (my_string, n) => [...my_string].map(v =>  Array.from({length : n}, ()=>v)).flat().join(""); // 8
// const solution = (my_string, n) => [...my_string].map(v => v.repeat(n)).join("");
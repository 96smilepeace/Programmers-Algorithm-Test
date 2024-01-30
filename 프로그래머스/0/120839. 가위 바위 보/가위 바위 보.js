const solution = (rsp) => {
    const mapping = { 2 : "0", 0 : "5", 5 : "2"};
    
    return [...rsp].map(v => mapping[v]).join("");
}
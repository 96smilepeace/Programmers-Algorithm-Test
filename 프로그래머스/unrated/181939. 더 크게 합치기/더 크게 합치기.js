const solution = (a, b) => {
    const ab = Number(a + "" + b + "");
    const ba = Number(b + "" + a + "");
    
    return ab > ba ? ab : ab === ba ? ab : ba;
}
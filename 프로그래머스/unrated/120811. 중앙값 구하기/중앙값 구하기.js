const solution = (array) => {
    const sortArr = [...array].sort((a,b) => a - b);
    return sortArr[Math.floor(sortArr.length / 2)];
}
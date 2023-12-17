const solution = (array, height) => array.sort((a,b) => a-b).reduce((acc, cur) => {
    if(cur > height){
        acc++;
    }
    return acc;
},0)
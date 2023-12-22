const solution = (numbers) => {
    const numberSort = [...numbers];
    numberSort.sort((a,b) => b-a);
    return numberSort[0] * numberSort[1];
}
const solution = (num_list) => {
    const [comparisonNum, baseNum] = num_list.slice(-2);
    const addElement = baseNum > comparisonNum ?
                       baseNum - comparisonNum :
                       baseNum * 2;
    
    return [...num_list, addElement];
}
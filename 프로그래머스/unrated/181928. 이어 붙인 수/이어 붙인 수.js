const solution = (num_list) => {
    const [even, odd] = num_list.reduce((acc, cur) => {
        const numAsString = cur.toString();
        cur % 2 === 0 ? acc[0] += numAsString : acc[1] += numAsString;
        return acc.map(string => +string);
    },['','']);

    return even + odd;
}
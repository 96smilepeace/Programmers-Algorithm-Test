const solution = (n, control) => [...control].map(v => v === "w" ? 1 : v === "s" ? -1 : v === "d" ? 10 : -10).reduce((acc, cur) => acc + cur) + n;
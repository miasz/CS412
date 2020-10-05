// function
const solve = expression => {
    const right = parseInt(expression[0]);
    const left = parseInt(expression[2]);
    const op = expression[1];
    switch(op) {
        case '/': return right/left;
        case '-': return right-left;
        case '+': return right+left;
        case '*': return right*left;
    }
}

// given tests
console.log(`4+2 = ${solve('4+2')}`);
console.log(`5*7 = ${solve('5*7')}`);
console.log(`6-1 = ${solve('6-1')}`);
console.log(`9/2 = ${solve('9/2')}`);

module.exports = {solve};

const Stack = require("../lib/stack");

const match = (expression) => {
    let parens = new Stack()

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === "(") {
            parens.push("(")
        } else {
            if (expression[i] === ")") {
                if (parens.top) {
                    parens.pop()
                }
                else return false
            }
        }
    }
    return !parens.top
};

module.exports = match;

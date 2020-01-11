// Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

// For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

// For your convenience, the input is formatted such that a space is provided between every token.

// Empty expression should evaluate to 0.

// Valid operations are +, -, *, /.

// You may assume that there won't be exceptional situations (like stack underflow or division by zero).

var testExpr = "1 3 -";

function calc(expr) {
    // parse expression
    let tokens = expr.split(" ");
    let stack = [];

    function doMath(num1, num2, oper) {        
        let res = 0;
        switch(oper) {
            case "+": res = num2 + num1; return res;
            case "-": res = num2 - num1; return res;
            case "*": res = num2 * num1; return res;
            case "/": res = num2 / num1; return res;
            default: break;
        }
    }

    tokens.map((t) => {
        if(parseFloat(t).toString() === "NaN") {
            let num1 = stack.pop();
            let num2 = stack.pop();

            let res = doMath(num1, num2, t);
            stack.push(res);
        }else{
            stack.push(parseFloat(t));
        }
        return null;
    })
    
    if(stack[0]) return stack[0];
    else return 0;
}

calc(testExpr);
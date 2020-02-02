// Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression

// Example:

// Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
// Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right.

const Calculator = function() {
    this.evaluate = string => {
        // console.log(string);
        let res = null;
        const arr = string.split(" ");
        if(arr.length === 1) return string;

        const calculation = (num1, oper, num2) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            console.log(num1, oper, num2);
            switch(oper) {
                case "+": 
                    return (num1 + num2);
                case "-": 
                    return (num1 - num2);
                case "*": 
                    return (num1 * num2);
                case "/": 
                    return (num1 / num2);
                default: return null;
            }
        }

        let multDiv = ["*","/"];
        for(let e=0; e<arr.length; e++) {
            // check for matching operator
            if(arr[e+1] === multDiv[0] || arr[e+1] === multDiv[1]) {
                // console.log("arr index:", e);
                res = calculation(arr[e], arr[e+1], arr[e+2]);
                arr.splice(e, 3);
                arr.splice(e, 0, res);
                e=-1; continue;
            }
        }
        let addSub = ["+","-"];
        for(let e=0; e<arr.length; e++) {
            // check for matching operator
            if(arr[e+1] === addSub[0] || arr[e+1] === addSub[1]) {
                // console.log("arr index:", e);
                res = calculation(arr[e], arr[e+1], arr[e+2]);
                arr.splice(e, 3);
                arr.splice(e, 0, res);
                e=-1; continue;
            }
        }

        return arr[0];
    }
};
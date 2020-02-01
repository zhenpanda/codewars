// Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression

// Example:

// Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
// Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right.

const Calculator = function() {
    this.evaluate = string => {

        let res = null;
        const arr = string.split(" ");
        if(arr.length === 1) return string;

        const calculation = (num1, oper, num2) => {
            console.log(num1, oper, num2);
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            switch(oper) {
                case "+": return (num1 + num2);
                case "-": return (num1 - num2);
                case "*": return (num1 * num2);
                case "/": return (num1 / num2);
                default: return null;
            }
        }

        let newArr = [];
        let order = ["*","/","+","-"];
        for(let r=0; r<order.length; r++) {  
            if(arr.length > 0) {

                while(arr.length > 2) {
                    
                    let num1 = arr.shift();
                    let oper = arr.shift();
                    let num2 = arr.shift();
                    
                    console.log(oper, order[r]);
                    if(oper === order[r]) {
                        res = calculation(num1, oper, num2);
                        if(res) {
                            arr.unshift(res);
                            console.log(arr, "calc res");
                        }
                    }else{
                        newArr.push(num1);
                        newArr.push(oper);
                        newArr.push(num2);
                    }

                    console.log(arr, newArr);
                }
                if(newArr.length > 0) arr = newArr;
                
            }else if(arr.length === 1) return arr[0];
        }

    }
};
// ['SEND + MORE = MONEY','9567 + 1085 = 10652']

let alphametics = (s) => {
    let adder = [];
    let sum;;
    s.split(" ").map((e,i,a) => {
        if(i+1 === a.length) sum = e;
        else if(e !== "+" && e !== "=") adder.push(e);
    });
    // console.log(adder, sum);
    
    // equation builder
    let letters = [];
    let adderStr = [];
    let sumStr = {};
    
    sum.split("").map((e,i) => {
        sumStr[i] = e;
        if(!(letters.includes(e))) letters.push(e);
    });

    adder.map((e) => {
        let currentStr = {};
        e.split("").map((a,i) => {
            currentStr[i] = a;
            if(!(letters.includes(a))) letters.push(a);
        });
        adderStr.push(currentStr);
    });
    // console.log(letters);
    // console.log(adderStr,sumStr);

    // letters of each decimal place
    let equations = {};
    for(let d=sum.length-2; d>-1; d--) {
        // console.log(d);
        equations[d] = [];
        adderStr.map((e) => {
            equations[d].push(e[d]);
        })
    }
    
    console.log(equations);
}
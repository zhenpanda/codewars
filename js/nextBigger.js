/*

You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:

nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1

*/


/*

Array.max = function( array ){
    return Math.max.apply( Math, array );
};

Array.min = function( array ){
    return Math.min.apply( Math, array );
};
The premise behind this technique is simple (and obvious once you see it): Just find any built-in JavaScript function that takes unlimited arguments – it’ll now be just as easy to adapt it for Array-wide use. By using JavaScript’s .apply() method on a built-in function you can pass in an array of unlimited arguments.

After “discovering” this for myself I found out that it’s mentioned in the “Rhino” book, which made me feel stupid. Oh well, it’s a great trick and its one that more people should know.

*/

function nextBigger(n) {
  // console.log(n);
  let m;
  function find(num, gapValue) {
    let arr = String(num).split("");
    let sets = {};
    let gaps = [];
    let result;
    for(let e=arr.length; e>-1; e--) {
      for(let x=arr.length-1; x>-1; x--) {
        let cur = arr[e];
        let nex = arr[x];
        let big = arr;
        // console.log(cur,nex,e,x,big);
        big[e] = nex;
        big[x] = cur;
        if (big[e] && big[x]) {
          let spread = parseInt(big.join("")) - n;
          // console.log(big,spread);
          if(spread > 0) {
            sets[spread] = parseInt(big.join(""));
            gaps.push(spread);
          }
        }
      }
    };
    // console.log(sets,gaps);
    Array.min = function( gaps ) {return Math.min.apply( Math, gaps )};
    let min = Array.min(gaps);
    // smallestGap = min;
    result = sets[min];
    if ( gapValue > min) {
      // console.log(result, min, gapValue);
      m = min;
      return find(result, min);
    }else if( m == gapValue ){
      // debugger;
      // console.log("stop", num,result);
      return num;
    }
  }
  let len = String(n).length;
  let g = Array(len).fill(9).join("");
  // console.log(g);
  let r = find(n,g);
  // console.log(r);
  if(r == n) return -1;
  else if (!r) return -1;
  else if (r != n) return r;
}

nextBigger(144);
// 773876417


// submit

function nextBigger(n) {
  // m will the distance btw input num and resulting num
  let m;
  // recusion function takes in a num and previse gap value
  function find(num, gapValue) {
    let arr = String(num).split("");
    let sets = {};
    let gaps = [];
    let result;
    // loop tho each digit and switch it with another dig in the number
    for(let e=arr.length; e>-1; e--) {
      for(let x=arr.length-1; x>-1; x--) {
        let cur = arr[e];
        let nex = arr[x];
        let big = arr;
        big[e] = nex;
        big[x] = cur;
        if (big[e] && big[x]) {
          // subtract the resulting number by input number
          // if it's bigger remember it
          let spread = parseInt(big.join("")) - n;
          if(spread > 0) {
            sets[spread] = parseInt(big.join(""));
            gaps.push(spread);
          }
        }
      }
    };
    // check all the remembered numbers to see which one is cloest in distance to the input number
    Array.min = function( gaps ) {return Math.min.apply( Math, gaps )};
    let min = Array.min(gaps);
    // number with smallest distance is our number for now
    result = sets[min];
    // if the distance from previse function is bigger than saved distance, try again
    if ( gapValue > min) {
      // but we will save the current smallest distance
      m = min;
      // try this again with the new number, and new distance
      return find(result, min);
    }else if( m == gapValue ){
      // but if the last distance is same as the saved distance we can no longer find a smaller distance
      return num;
    }
  }
  let len = String(n).length;
  let g = Array(len).fill(9).join("");
  let r = find(n,g);
  if(r == n) return -1;
  else if (!r) return -1;
  else if (r != n) return r;
}




// WOW
const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

function nextBigger(n){

  let arr = sortedDigits(n);
  let max = parseInt(arr.join(''), 10);

  for(var i = n + 1; i <= max; i++){
    if(sortedDigits(i).every((x, j) => x === arr[j])){
      return i;
    }
  }

  return -1;
}

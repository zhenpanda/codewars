/*

Given an array of positive integers, return true if the average of its elements is an integer and false otherwise.

Code Limit

Less than 46 characters.

Example

For a = [1, 2, 3], the output should be true.

(1 + 2 + 3) / 3 = 2

For a = [1, 2, 2], the output should be false.

(1 + 2 + 2) / 3 = 1.666666667

For a = [1, 9, 8, 2], the output should be true.

(1 + 9 + 8 + 2) / 4 = 5

*/

i = n => {
  return n.reduce((a,c,i) => {
    console.log(a,c,i,());
    return (a+c)/i+1;
  })
}
i([1, 2, 3])

integerAverage=n=>n.reduce((a,b)=>a+b)
integerAverage([1, 2, 3])
// 2

integerAverage=a=>1>eval(a.join`+`)%a.length

/*
There are 8 balls numbered from 0 to 7. Seven of them have the same weight. One is heavier. Your task is to find it's number.

Your function findBall will receive single argument - scales object. The scales object contains an internally stored array of 8 elements (indexes 0-7), each having the same value except one, which is greater. It also has a public method named getWeight(left, right) which takes two arrays of indexes and returns -1, 0, or 1 based on the accumulation of the values found at the indexes passed are heavier, equal, or lighter.

getWeight returns:

-1 if left pan is heavier

1 if right pan is heavier

0 if both pans weight the same

Examples of scales.getWeight() usage:

scales.getWeight([3], [7]) returns -1 if ball 3 is heavier than ball 7, 1 if ball 7 is heavier, or 0 i these balls have the same weight.

scales.getWeight([3, 4], [5, 2]) returns -1 if weight of balls 3 and 4 is heavier than weight of balls 5 and 2 etc.

So where's the catch, you may ask. Well - the scales is very old. You can use it only 4 TIMES before the scale breaks.
*/

Array.prototype.half = function() {
    var left = this.splice(0, Math.floor(this.length/2));
    var right = this.splice(0, this.length);
    return [left,right];
};
function findBall(scales) {
// call scales.getWeight() max 4 times
// return indexOfHeavyBall;
    var balls = [0,1,2,3,4,5,6,7];
    var out;
    var compare = function(array) {
        console.log("these are the balls coming in ", array);
        if (array.length == 1) { 
            out = array[0];
            console.log("found it! ball num ", out)
            return 1; 
        };
        var weighted = array.half();
        console.log(weighted);

        if (scales.getWeight(weighted[0],weighted[1]) == -1) {
            console.log("left is heavy!")
            compare(weighted[0]);
        }else {
            console.log("right is heavy!")
            compare(weighted[1]);
        };
    }
    compare(balls);
    return out;
}


//submit
Array.prototype.half = function() {
    var left = this.splice(0, Math.floor(this.length/2));
    var right = this.splice(0, this.length);
    return [left,right];
};
function findBall(scales) {
// call scales.getWeight() max 4 times
    var balls = [0,1,2,3,4,5,6,7];
    var out;
    var compare = function(array) {
        if (array.length == 1) { 
            out = array[0];
            return 1; 
        };
        var weighted = array.half();
        if (scales.getWeight(weighted[0],weighted[1]) == -1) {
            compare(weighted[0]);
        }else {
            compare(weighted[1]);
        };
    }
    compare(balls);
    return out;
}
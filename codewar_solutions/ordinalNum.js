/*

You know how sometimes there are two letters at the end of a number? Like 1st, 2nd, 3rd, and so on? Those numbers are called "ordinal numbers"; numbers used to refer to a position in a series. It might be useful to have a function that returns those two letters so we can print it out and what-have-you.

Your task is to write the ordinal(number, brief) function. number will be an integer, and brief will be an optional parameter. Sometimes 2nd and 3rd are shown as 2d and 3d, in certain fields (like legal or military stuff). So take this into account when you're writing your function. ordinal(number, brief) should return a string containing those two characters (or one character) that would be tagged onto the end of the number.

The units number (the last digit) should be used to determine the correct ordinal suffix. The following table should be used:

0  1  2  3  4  5  6  7  8  9
th st nd rd th th th th th th
If the "brief" notation is used, 2 and 3's suffix should be "d".

If the tens number (the second from last digit) is a 1 (from 10 to 19), the suffix should be "th".

Some examples would be: 1st 11th 111th 121st 20th 52nd 903d (brief), and so on...

*/

function ordinal(number, brief) {
    var numStr = String(number);
    var numCount = numStr.length;
    var ordinalNum = parseInt(numStr[numCount-1]);
    //console.log(ordinalNum);
    switch (ordinalNum) {
        case 0:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return "th";
            break;
        case 1:
            if (parseInt(numStr[numCount-2])==1) {return "th"};
            return "st";
            break;
        case 2:
            if (parseInt(numStr[numCount-2])==1) {return "th"};
            if (brief) {return "d"};
            return "nd";
            break;
        case 3:
            if (parseInt(numStr[numCount-2])==1) {return "th"};
            if (brief) {return "d"};
            return "rd";
            break;
        default:
            return "err"
            break;
    }
}

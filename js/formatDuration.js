/*

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

  formatDuration(62)    // returns "1 minute and 2 seconds"
  formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
Note that spaces are important.

Detailed rules

The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

For the purpose of this Kata, a year is 365 days and a day is 24 hours.

*/

/*
  1 minute = 60 seconds
  1 hour = 3600 seconds
  1 day = 86400 seconds
  1 year = 31536000 seconds
*/

// test ? expression1 : expression2

// if(Math.floor(inputSeconds/3600)>=1) {
//   // check if under 1 year
//   if(seconds<86400) {
//     let h = Math.floor(inputSeconds/3600);
//     if(h>1) res = h + ' hours,';
//     else res = h + ' hour,';
//     inputSeconds-=(h*3600);
//   }
// }else if(Math.floor(inputSeconds/60)>=1) {
//   // check if under 1 hour
//   if(seconds<3600) {
//     let m = Math.floor(inputSeconds/60);
//     if(m>1) res = m + ' minutes';
//     else res = m + ' minute';
//     inputSeconds-=(m*60);
//   }else{
//     let m = Math.floor(inputSeconds/60);
//     if(m>1) res = res + ' and ' + m + ' minutes';
//     else res = res + ' and ' + m + ' minute';
//     inputSeconds-=(m*60);
//   };
// }else if(inputSeconds<60) {
//   // check if under 1 min
//   if (seconds<60) {
//     if (inputSeconds>1) res = inputSeconds + ' seconds';
//     else res = inputSeconds + ' second';
//     inputSeconds-=inputSeconds;
//   }else{
//     if (inputSeconds>1) res = res + ' and ' + inputSeconds + ' seconds';
//     else res = res + ' and ' + inputSeconds + ' second';
//     inputSeconds-=inputSeconds;
//   }

function formatDuration (seconds) {
  let durations = [
    [31536000,'year'],
    [86400,'day'],
    [3600,'hour'],
    [60,'minute'],
    [1,'second']
  ];
  function format(inputSeconds, res='') {
    durations.map((c,i,a)=>{
      if (inputSeconds>=c[0]) {
        let d = Math.floor(inputSeconds/c[0]);
        if(i===4) {
          // debugger;
          if (seconds<60) {
            if (inputSeconds>1) res = inputSeconds + ' ' + c[1];
            else res = inputSeconds + ' ' +c[1];
            inputSeconds-=inputSeconds;
          }else{
            if(d>1) res = res + ' and ' + d + ' ' + c[1] + 's';
            else res = res + ' and ' + d + ' '+ c[1];
            inputSeconds-=inputSeconds;
          };
        }else if (i===3 && inputSeconds%c[0]==0 && seconds > 3600) {
          if(d>1) res = res.slice(0, -2) + ' and ' + d + ' ' + c[1] + 's';
          else res = res.slice(0, -2) + ' and ' + d + ' '+ c[1];
          inputSeconds-=inputSeconds;
        }else{
          if(d>1) res = res + d + ' '+ c[1] + 's';
          else res = res + d + ' '+ c[1];
          inputSeconds-=(d*c[0]);
        };

        if (i<3 && inputSeconds%c[0]!==0) {res=res+', '};
      }
    });
    return res;
  };
  return seconds===0 ? 'now' : format(seconds);
}

formatDuration(132030240) // '4 years, 68 days, 3 hours and 4 minutes'
// formatDuration(62) // "1 minute and 2 seconds"
// formatDuration(120) // "2 minutes"
// formatDuration(3600) // "1 hour"
// formatDuration(3662) // "1 hour, 1 minute and 2 seconds"

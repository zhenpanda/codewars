/*

The businesspeople among you will know that it's often not easy to find an appointment. In this kata we want to find such an appointment automatically. You will be given the calendars of our businessperson and a duration for the meeting. Your task is to find the earliest time, when every businessperson is free for at least that duration.

Example Schedule:

Person | Meetings
-------+-----------------------------------------------------------
     A | 09:00 - 11:30, 13:30 - 16:00, 16:00 - 17:30, 17:45 - 19:00
     B | 09:15 - 12:00, 14:00 - 16:30, 17:00 - 17:30
     C | 11:30 - 12:15, 15:00 - 16:30, 17:45 - 19:00
Rules:

All times in the calendars will be given in 24h format "hh:mm", the result must also be in that format
A meeting is represented by its start time (inclusively) and end time (exclusively) -> if a meeting takes place from 09:00 - 11:00, the next possible start time would be 11:00
The businesspeople work from 09:00 (inclusively) - 19:00 (exclusively), the appointment must start and end within that range
If the meeting does not fit into the schedules, return null or None as result
The duration of the meeting will be provided as an integer in minutes
Following these rules and looking at the example above the earliest time for a 60 minutes meeting would be 12:15.

Data Format:

The schedule will be provided as 3-dimensional array. The schedule above would be encoded this way:

[
  [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
  [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
  [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
]
[ [("09:00", "11:30"), ("13:30", "16:00"), ("16:00", "17:30"), ("17:45", "19:00")]
, [("09:15", "12:00"), ("14:00", "16:30"), ("17:00", "17:30")]
, [("11:30", "12:15"), ("15:00", "16:30"), ("17:45", "19:00")]
]

*/

// var schedules = [
//   [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
//   [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
//   [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
// ];

var schedules =
[ [ [ '09:00', '09:00' ],
    [ '10:07', '10:39' ],
    [ '10:41', '11:03' ],
    [ '12:21', '12:22' ],
    [ '15:49', '16:11' ],
    [ '17:29', '17:54' ],
    [ '19:00', '19:00' ] ],
  [ [ '09:00', '09:00' ],
    [ '09:48', '12:26' ],
    [ '15:41', '15:59' ],
    [ '18:50', '18:57' ] ],
  [ [ '09:00', '09:00' ],
    [ '09:41', '09:57' ],
    [ '10:03', '10:14' ],
    [ '10:32', '10:39' ],
    [ '10:56', '11:17' ],
    [ '11:23', '11:41' ],
    [ '11:59', '12:03' ],
    [ '12:28', '12:45' ],
    [ '17:19', '17:27' ],
    [ '18:56', '18:57' ] ],
  [ [ '09:00', '09:00' ],
    [ '11:21', '12:42' ],
    [ '12:51', '13:20' ],
    [ '17:51', '17:53' ],
    [ '18:07', '18:11' ],
    [ '19:00', '19:00' ] ],
  [ [ '09:00', '09:00' ],
    [ '09:37', '11:19' ],
    [ '11:27', '13:37' ],
    [ '16:29', '17:41' ],
    [ '19:00', '19:00' ] ] ]

function getStartTime(schedules, duration) {
  // console.log(schedules,duration)
  function checkMinutes(timeOne,timeTwo, mode) {
    let timeOneMin = (parseInt(timeOne.split(":")[0]) * 60) + parseInt(timeOne.split(":")[1]);
    let timeTwoMin = (parseInt(timeTwo.split(":")[0]) * 60) + parseInt(timeTwo.split(":")[1]);
    if(mode == "head") {
      if(timeTwoMin - timeOneMin > 0) {
        let head = timeTwoMin - timeOneMin;
        let newTime = timeTwoMin - head;
        let hour = 0;
        let min = 0;
        while(newTime >= 60) {
          newTime-=60;
          hour++;
        };
        if(hour < 10) {
          if(newTime < 10) return [timeOne, "0"+hour+":0"+newTime];
        }else{
          if(newTime < 10) return [timeOne, hour+":0"+newTime];
        }
      }else{
        return null;
      };
    }else if(mode == "gap") {
      if(timeTwoMin - timeOneMin >= duration) {
        return [timeOne,timeTwo];
      }else{ return null }
    }else if (mode == "tail") {
      if(timeTwoMin - timeOneMin >= duration -1) {
        return [timeTwo,timeTwo];
      }else{ return null }
    }else if(mode == "shareHead") {
      if(timeOneMin < timeTwoMin) return false;
      else return true;
    }else if (mode == "shareTail") {
      if(timeOneMin + duration <= timeTwoMin) return timeOne;
      else return false;
    }else if (mode == "latest") {
      if(timeOneMin < timeTwoMin) return timeTwo;
      else return timeOne;
    }else if (mode == "doubleCheck") {
      if(timeOneMin + duration <= timeTwoMin) return timeOne;
      else return false;
    }
  }
  let timeSlot = true;
  let freeSlots = [];
  for(let p=0;p<schedules.length;p++) {
    // free time before any meeting add into array
    if(schedules[p].length < 1) return null;
    let headSlot = checkMinutes("09:00",schedules[p][0][0], "head");
    if(headSlot != null) schedules[p].unshift(headSlot);
    let tailSlot = checkMinutes(schedules[p][schedules[p].length-1][1], "19:00", "tail");
    if(tailSlot != null) schedules[p].push(tailSlot);
    freeSlots.push([]);
    for(let t=0;t<schedules[p].length-1;t++) {
      let freeTime = checkMinutes(schedules[p][t][1],schedules[p][t+1][0], "gap");
      if(freeTime) freeSlots[p].push(freeTime);
    };
    if(freeSlots[p].length < 1) timeSlot = false;
  }
  if(timeSlot) {
    // at least 1 timeslot has to work from first array for possible slots
    for(let f=0;f<freeSlots[0].length;f++) {
      let workableSlots = [ freeSlots[0][f][0] ];
      for(let e=1;e<freeSlots.length;e++) {
        let shareTime;
        for(let s=0;s<freeSlots[e].length;s++) {
          let shareHead = checkMinutes(freeSlots[e][s][1], freeSlots[0][f][1], "shareHead");
          let shareTail = checkMinutes(freeSlots[e][s][0], freeSlots[0][f][1], "shareTail");
          if( (shareHead || freeSlots[e][s][0] == freeSlots[0][f][0]) && shareTail) {shareTime = shareTail;
          }else{
            let doubleChecked = checkMinutes(freeSlots[e][s][0], freeSlots[0][f][1], "doubleCheck");
            if(doubleChecked) {
              doubleChecked = checkMinutes(freeSlots[0][f][0], freeSlots[e][s][1], "doubleCheck");
              if(doubleChecked) shareTime = doubleChecked;
            }
          }
          if(shareTime) {break}
        }
        if(shareTime) {workableSlots.push(shareTime)};
      }
      // console.log(workableSlots);
      if(workableSlots.length == freeSlots.length) {
        let latest = workableSlots[0];
        for(let a=1;a<workableSlots.length;a++) {
          latest = checkMinutes(latest, workableSlots[a], "latest");
        }
        return latest;
      }
    }
  }
  return null;
}

getStartTime(schedules, 38)




function getStartTime(schedules, duration) {
  function checkMinutes(timeOne,timeTwo, mode) {
    let timeOneMin = (parseInt(timeOne.split(":")[0]) * 60) + parseInt(timeOne.split(":")[1]);
    let timeTwoMin = (parseInt(timeTwo.split(":")[0]) * 60) + parseInt(timeTwo.split(":")[1]);
    if(mode == "head") {
      if(timeTwoMin - timeOneMin > 0) {
        let head = timeTwoMin - timeOneMin;
        let newTime = timeTwoMin - head;
        let hour = 0;
        let min = 0;
        while(newTime >= 60) {
          newTime-=60;
          hour++;
        };
        if(hour < 10) {
          if(newTime < 10) return [timeOne, "0"+hour+":0"+newTime];
        }else{
          if(newTime < 10) return [timeOne, hour+":0"+newTime];
        }
      }else{
        return null;
      };
    }else if(mode == "gap") {
      if(timeTwoMin - timeOneMin >= duration) {
        return [timeOne,timeTwo];
      }else{ return null }
    }else if (mode == "tail") {
      if(timeTwoMin - timeOneMin >= duration -1) {
        return [timeTwo,timeTwo];
      }else{ return null }
    }else if(mode == "shareHead") {
      if(timeOneMin < timeTwoMin) return false;
      else return true;
    }else if (mode == "shareTail") {
      if(timeOneMin + duration <= timeTwoMin) return timeOne;
      else return false;
    }else if (mode == "latest") {
      if(timeOneMin < timeTwoMin) return timeTwo;
      else return timeOne;
    }else if (mode == "doubleCheck") {
      if(timeOneMin + duration <= timeTwoMin) return timeOne;
      else return false;
    }
  }
  let timeSlot = true;
  let freeSlots = [];
  for(let p=0;p<schedules.length;p++) {
    if(schedules[p].length < 1) return null;
    let headSlot = checkMinutes("09:00",schedules[p][0][0], "head");
    if(headSlot != null) schedules[p].unshift(headSlot);
    let tailSlot = checkMinutes(schedules[p][schedules[p].length-1][1], "19:00", "tail");
    if(tailSlot != null) schedules[p].push(tailSlot);
    freeSlots.push([]);
    for(let t=0;t<schedules[p].length-1;t++) {
      let freeTime = checkMinutes(schedules[p][t][1],schedules[p][t+1][0], "gap");
      if(freeTime) freeSlots[p].push(freeTime);
    };
    if(freeSlots[p].length < 1) timeSlot = false;
  }
  if(timeSlot) {
    for(let f=0;f<freeSlots[0].length;f++) {
      let workableSlots = [ freeSlots[0][f][0] ];
      for(let e=1;e<freeSlots.length;e++) {
        let shareTime;
        for(let s=0;s<freeSlots[e].length;s++) {
          let shareHead = checkMinutes(freeSlots[e][s][1], freeSlots[0][f][1], "shareHead");
          let shareTail = checkMinutes(freeSlots[e][s][0], freeSlots[0][f][1], "shareTail");
          if( (shareHead || freeSlots[e][s][0] == freeSlots[0][f][0]) && shareTail) {shareTime = shareTail;
          }else{
            let doubleChecked = checkMinutes(freeSlots[e][s][0], freeSlots[0][f][1], "doubleCheck");
            if(doubleChecked) {
              doubleChecked = checkMinutes(freeSlots[0][f][0], freeSlots[e][s][1], "doubleCheck");
              if(doubleChecked) shareTime = doubleChecked;
            }
          }
          if(shareTime) {break}
        }
        if(shareTime) {workableSlots.push(shareTime)};
      }
      if(workableSlots.length == freeSlots.length) {
        let latest = workableSlots[0];
        for(let a=1;a<workableSlots.length;a++) {
          latest = checkMinutes(latest, workableSlots[a], "latest");
        }
        return latest;
      }
    }
  }
  return null;
}

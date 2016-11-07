function solution(number){
  let sum = 0;
  while (number-- > 0) {
    if ((number) % 3 == 0 || (number) % 5 == 0) {
      sum = sum + (number)
    }
  }
  return sum;
}

solution(10)

function markdownParser (markdown) {
  // console.log("input", markdown)
  let str = markdown.trim().split(" ");
  let tag = str[0];
  let tagNum = 0;
  for (let h = 0; h < tag.length; h++) {
    tagNum++;
  }
  if (tagNum < 1 || tagNum > 6 || tag[0] != "#") {
    return markdown
  }
  let out = "<h" +tagNum+ ">";
  if (str[1] == "") {
    for (let s = 1; s < str.length; s++) {
      if (str[s] != "" ) {out = out + str[s] + " ";}
    }
  }else {
    for (let s = 1; s < str.length; s++) {out = out + str[s] + " ";}
  }
  let s = (out.slice(0, -1) + "</h" + tagNum + ">");
  return s;
}

markdownParser("# Far      Out, Dude");


function disemvowel(str) {
  let out = "";
  str.split("").map((e)=>{
    let v = e.toLowerCase();
    switch (v) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        break;
      default:
        out = out + e;
    }
  })
  return out;
}

disemvowel("Almost finished with this challenge!")


function spread(func, args) {
  return func(...args);
}

spread( function(x,y){
  console.log(x,y)
  return x+y
}, [1,2])


function compare(a,b){
  let wA = 0;
  let wB = 0;

  let pair = [ a.split(" "), b.split(" ")];
  for (let p = 0; p < pair.length; p++) {
    for (let e = 0; e < pair[p].length; e++) {
      let s = 0;
      let el = pair[p][e];
      switch (el) {
        case el.indexOf('#') > -1 :
        s = s +100;
        break;
        case el.indexOf('.') > -1 :
        s = s +10;
        break;
        default:s = s +1;break;
      }

      if (p == 0) {
        wA = wA + s;
      }else{
        wB = wB + s;
      }
    }
  }
  console.log(wA,wB)
  if (wA > wB) {
    return a
  }else{
    return b
  }
}

compare("div.big", ".small")

// "body p"

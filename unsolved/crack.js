// Mr. Mxyzinjin has set up 12 new servers where he stores all his new katas. He set up the admin account with a long, long randomly generated password that consists of uppercase letters, lowercase letters, numbers and symbols:

// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789()`~!@#$%^&*-+=|\{}[]:;"'<>,.?/
// You just got hold of his server's login function, which will only return true if the input matches the password. Your task is to crack and return the passwords on all his servers before his matrix detects your presence and kicks you out (which happens 12 seconds after you get in, so be quick!).

function crack(login) {
    //   let funcStr = login.toString();
    //   console.log(funcStr)
    let res = login('mxyzinjin5102');
    console.log(res);
    return 'mxyzinjin5102';
}

function check(pw) {
    return !(Array.isArray(pw) || pw.length>passwd.length) && [...passwd].every((c,i)=>c===pw[i]);
}

const pwChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789()`~!@#$%^&*-+=|\\{}[]:;\"'<>,.?/".split("");

/**
 * The login function iterates over all characters one by one. This greatly simplifies cracking:
 * instead of cracking the entire password at once, we can crack character by character.
 * We can guess the first character. If we see that the second character is accessed, then we know the first one was correct.
 * We detect access to characters using a proxy trap.
 */
function crack(login) {
  const foundChars = []; 
  let done = false;
  let charIndex = 0;
  
  while (!done) {
    const pwStealer = new Proxy({}, {
      get(target, prop, receiver) {
        if (prop === 'length') return 0;
        
        if (foundChars[prop] === undefined) {
          foundChars[prop] = pwChars[0];
          charIndex = 0;
        }
        
        if (foundChars[prop]) return foundChars[prop];
        
        return undefined;  
      }
    });
    
    foundChars.pop(); // last character is always the incorrect one
    charIndex++;
    foundChars.push(pwChars[charIndex]);  
    done = login(pwStealer);
  }
  
  return foundChars.join('');
}
/*

Your task is to implement a function that calculates an election winner from a list of voter selections using an Instant Runoff Voting algorithm. If you haven't heard of IRV, here's a basic overview (slightly altered for this kata):

Each voter selects several candidates in order of preference.
The votes are tallied from the each voter's first choice.
If the first-place candidate has more than half the total votes, they win.
Otherwise, find the candidate who got the least votes and remove them from each person's voting list.
In case of a tie for least, remove all of the tying candidates.
In case of a complete tie between every candidate, return nil(Ruby)/None(Python)/undefined(JS).
Start over.
Continue until somebody has more than half the votes; they are the winner.
Your function will be given a list of voter ballots; each ballot will be a list of candidates (symbols) in descending order of preference. You should return the symbol corresponding to the winning candidate. See the default test for an example!

*/

function runoff(voters) {
  let winState = (candidates) => {
    if (candidates.length%2 === 0) return (Math.ceil(candidates.length/2)+1);
    else return Math.ceil(candidates.length/2);
  };
  let voteCount = (votersArr) => {
    let result = {};
    votersArr.map((v)=>{if(result[v[0]]) result[v[0]] += 1;else result[v[0]] = 1});
    // check for missing candidate with no votes
    votersArr[0].map((c)=>{if(!result[c]) result[c] = 0});
    return result;
  };
  let filterResult = (voteResultInput, winCountInput, voterStateInput) => {
    let voteRank = [];
    // sole candidate
    if (Object.keys(voteResultInput).length === 1) {
      runoffWinner = Object.keys(voteResultInput)[0];return;
    };
    Object.keys(voteResultInput).forEach((key,index)=>{
      if(voteResultInput[key] >= winCountInput) runoffWinner = key;
      voteRank.push(voteResultInput[key]);
    });
    // check if all equal
    if (voteRank.every((e)=> { return e === voteRank[0]})) runoffWinner = 'undefined';
    // check for no vote candidate
    // find least vote count
    let removeCandidate = voteRank.sort()[0];
    let removeCandidateNames = [];
    Object.keys(voteResultInput).forEach((key,index)=>{
      if(voteResultInput[key] === removeCandidate) removeCandidateNames.push(key);
    });
    // remove candidates with least votes
    removeCandidateNames.map((c)=>{
      voterStateInput.map((v)=>{
        let index = v.indexOf(c);
        v.splice(index, 1);
      });
    });
    // console.table(voterStateInput);
    if (runoffWinner === null) filterResult(voteCount(voterStateInput), winCountInput, voterStateInput);
  };
  // start to check votes
  let runoffWinner = null;
  filterResult(voteCount(voters), winState(voters), voters);
  return runoffWinner;
};

runoff(
  [
    [ 'Gihren Zabi','Drake Luft','Frank Underwood','Reinhard von Musel','Lex Luthor' ],
    [ 'Lex Luthor','Frank Underwood','Drake Luft','Reinhard von Musel','Gihren Zabi' ],
    [ 'Drake Luft','Lex Luthor','Frank Underwood','Reinhard von Musel','Gihren Zabi' ],
    [ 'Frank Underwood','Lex Luthor','Reinhard von Musel','Drake Luft','Gihren Zabi' ],
    [ 'Frank Underwood','Drake Luft','Reinhard von Musel','Lex Luthor','Gihren Zabi' ],
    [ 'Gihren Zabi','Lex Luthor','Drake Luft','Reinhard von Musel','Frank Underwood' ],
    [ 'Gihren Zabi','Drake Luft','Reinhard von Musel','Frank Underwood','Lex Luthor' ],
    [ 'Gihren Zabi','Frank Underwood','Drake Luft','Reinhard von Musel','Lex Luthor' ]
  ]
);
// undefined

// FINAL
function runoff(voters) {
  let winState = (candidates) => {
    if (candidates.length%2 === 0) return (Math.ceil(candidates.length/2)+1);
    else return Math.ceil(candidates.length/2);
  };
  let voteCount = (votersArr) => {
    let result = {};
    votersArr.map((v)=>{if(result[v[0]]) result[v[0]] += 1;else result[v[0]] = 1});
    votersArr[0].map((c)=>{if(!result[c]) result[c] = 0});
    return result;
  };
  let filterResult = (voteResultInput, winCountInput, voterStateInput) => {
    let voteRank = [];
    if (Object.keys(voteResultInput).length === 1) {
      runoffWinner = Object.keys(voteResultInput)[0];return;
    };
    Object.keys(voteResultInput).forEach((key,index)=>{
      if(voteResultInput[key] >= winCountInput) runoffWinner = key;
      voteRank.push(voteResultInput[key]);
    });
    if (voteRank.every((e)=> { return e === voteRank[0]})) runoffWinner = 'undefined';
    let removeCandidate = voteRank.sort()[0];
    let removeCandidateNames = [];
    Object.keys(voteResultInput).forEach((key,index)=>{
      if(voteResultInput[key] === removeCandidate) removeCandidateNames.push(key);
    });
    removeCandidateNames.map((c)=>{
      voterStateInput.map((v)=>{
        let index = v.indexOf(c);
        v.splice(index, 1);
      });
    });
    if (runoffWinner === null) filterResult(voteCount(voterStateInput), winCountInput, voterStateInput);
  };

  let runoffWinner = null;
  filterResult(voteCount(voters), winState(voters), voters);
  return runoffWinner;
};

// clever

function runoff(voters){
  var poll={};
  for (voter of voters) poll[voter[0]]=(poll[voter[0]] || 0)+1;
  var max = Math.max.apply(this, Object.values(poll));
  if (max>voters.length/2) return Object.keys(poll).filter(a=>poll[a]==max)[0];
  var min = Math.min.apply(this, Object.values(poll));
  return runoff(voters.map(a=>a.filter(b=>poll[b]!=min && poll[b]!=undefined)))
}

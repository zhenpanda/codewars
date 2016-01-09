/*
This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act).

Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.

You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.

Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.

For example, with n=7 and k=3 josephus(7,3) should act this way.

[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
So our final result is:

josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]
*/

/*
1,2,3,4,5,6,7
P,P,K

4,5,6,7,
P,P,K

7,1,2
P,P,K

1,4,
*/

/*
var string = "this is a string";
var length = 6;
var trimmedString = string.substring(0, length);
*/

/*
	function josephus(items,k) {
	  //your code here
	  var out = [];
	  var leftOver = [];
	  if (items.length==0) { return items };
	  if (k==1) { return items };

	  //kills every k-th 
	  var kill = function(list) {
	  	if (list.length == 0) { return 1 };
	  	if (list.length == 1) { 
	  		out.push(list[0]);
	  		return 1;
	  	};
	  	//two phase
	  	//phase1 kill dud down the line, recreate the line once reach line's end
	  	//pase 2 kill the dude as in a circle overlap counting and killing 

	  	//split the array into 2 parts then create new arrays
	  	// var headList = list.join("").substring(0, k-1).split("");
	  	// var tailList = list.join("").substring(k-1, list.length).split("");
	  	var headList = [];
	  	var tailList = [];
	  	
	  	//kill a dud on the list only if we don't restart the count
	  	if (list.length >= k) {	
	  	for (var h = 0; h < k-1; h++) { headList.push(list[h]) };
	  	for (var t = k-1; t < list.length; t++) { tailList.push(list[t]) };
	  	//console.log(headList,tailList);
		  	var victim = tailList.shift();
		  	out.push(victim);
	  	};

	  	//add leftover to a list
	  	leftOver = leftOver.concat(headList);
	  	//console.log(headList, tailList);

	  	//keep killing down the line as long as there are duds in same list
	  	if (k <= tailList.length) {
	  		//console.log(tailList);
	  		kill(tailList);
	  	}else {
	  		//if not enough on list to kill, start to kill the leftovers list
	  		leftOver = tailList.concat(leftOver);
	  		var newLine = leftOver;
	  		console.log(newLine, "this is new line");
	  		leftOver = [];
	  		//console.log(leftOver);
	  		if (newLine.length >= k) {
	  			kill(newLine); 
	  		};
			if (newLine.length < k) {
		  	//in the case of less leftover than k count
			//restart count from the beginning kill a dud 
				var kIndex = k - newLine.length;
				console.log(kIndex, newLine.length)
				var d = newLine.splice(kIndex-1,kIndex);
				console.log(d, "this is targeted leftOver dud");
				out.push(d[0]);
				console.log(newLine, "this is leftover line");
				//reset leftOver inorder to kill the circle going
				leftOver = newLine;
				kill(leftOver);
	  		};
	  	};
	  }
	  //start the killing
	  kill(items);
	  //checks
	  //console.log(leftOver, "this is leftOver");
	  return out;
	}
*/
//josephus([1,2,3],3)
//josephus([1,2,3,4,5,6,7],3)
//josephus([1,2,3,4,5,6,7,8,9,10],2)

/*

[1,2]
1,2,
3,4

[1,2,3]
1,2,3
4,5,6

*/

function josephus(items,k) {
  //your code here
  if (items.length==0 || k==1 ) { return items };
  //output array
  var out = [];
  //current list of items to kill
  var line = [];
  //stashed away items
  var stash = [];
  //stashed away items
  var slayingstash = [];
  //func need to return the list it works on
  var kill = function(list) {
  	console.log(list, "this is where the list starts")
  	//break the cycle
  	if (list.length==0) { return 1 };
	var victim;
  	//in the case list.length > k
  	if (list.length>k) {
  		console.log(list.length, "current list size, ", k, "current index"); 
  		victim = list.splice(k-1,1);
  		out.push(victim[0]);
  		var head = list.splice(0,k-1);
  		stash = stash.concat(head);
  		console.log(stash, "this is the stash")
  		//circle back, if the current list is smaller than k-th
  		if (list.length<=k) {
  			//add leftOver to the stash and kill starting again from stash-ed list
  			stash = list.concat(stash);
  			//start the killing again, with stashed items
  			line = stash;
  			//reset the stash
  			stash = [];
  			//restart the killing
  			kill(line);
  		};
  		//if current list after a kill is still longer than k-th keep killing
  		if (list.length>k) { kill(list) };
  	}else if(list.length<=k) {
  		console.log("kill reached parity", line, stash, k);
  		//start the slaying
  		slay(line);
  	}
  }

  //in the case k >= list.length
  var slay = function(list) {
  	if (list.length==0) { return 1 };
  	console.log(list, "are items to b slayed")
  	if (k>=list.length) {	
	  	//circle back if list is not long enough
	  	var remainder = k%list.length;
	  	console.log(remainder, "is the remainder");
	  	//no remainder, last one is the target, give back the list
	  	if (remainder==0) {
			victim = list.splice((list.length)-1,1)
		  	console.log(victim, "is killed");
		  	out.push(victim[0]);
		  	line = list;
		//else remainder is the target, give back the list
	  	}else{
	  		victim = list.splice((remainder)-1,1)
	  		console.log(victim, "is killed");
		  	out.push(victim[0]);
		  	//recreate the line
	  		var slayTail = list.splice(0,remainder-1);
	  		var slayHead = list.splice(0,list.length);
			slayingstash = slayHead.concat(slayTail);
	  		console.log(slayingstash, "this is the new list");
		  	line = slayingstash;
	  	};
	  	//recurse with care
	  	console.log(line, "remining items");
	  	slay(line);
  	};
  }

  //check which method to start the killing
  if (items.length>k) {
  	console.log("it's killing time!")
  	kill(items);
  }else if(items.length<=k) {
  	console.log("it's slaying time!")
  	slay(items);
  };

  //console.log(stash, "here is the stash");
  //console.log(line, "here is the line");
  return out;
}

//josephus([1,2,3],3)
//josephus([1,2,3],4)
//josephus([1,2,3,4,5,6,7],3)
//josephus([1,2,3,4,5,6,7,8,9,10],2)
//josephus([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 40)

// ----------- ----------- ----------- ----------- -----------
//no console testing 
function josephus(items,k) {
  //your code here
  if (items.length==0 || k==1 ) { return items };
  var out = [];
  var line = [];
  var stash = [];
  var slayingstash = [];
  var kill = function(list) {
  	if (list.length==0) { return 1 };
	var victim;
  	if (list.length>k) {
  		victim = list.splice(k-1,1);
  		out.push(victim[0]);
  		var head = list.splice(0,k-1);
  		stash = stash.concat(head);
  		if (list.length<=k) {
  			stash = list.concat(stash);
  			line = stash;
  			stash = [];
  			kill(line);
  		};
  		if (list.length>k) { kill(list) };
  	}else if(list.length<=k) {
  		slay(line);
  	}
  }
  var slay = function(list) {
  	if (list.length==0) { return 1 };
  	if (k>=list.length) {	
	  	var remainder = k%list.length;
	  	if (remainder==0) {
			victim = list.splice((list.length)-1,1)
		  	out.push(victim[0]);
		  	line = list;
	  	}else{
	  		victim = list.splice((remainder)-1,1)
		  	out.push(victim[0]);
	  		var slayTail = list.splice(0,remainder-1);
	  		var slayHead = list.splice(0,list.length);
			slayingstash = slayHead.concat(slayTail);
		  	line = slayingstash;
	  	};
	  	slay(line);
  	};
  }
  if (items.length>k) {
  	kill(items);
  }else if(items.length<=k) {
  	slay(items);
  };
  return out;
}

//josephus([1,2,3],3)
//josephus([1,2,3],4)
//josephus([1,2,3,4,5,6,7],3)
//josephus([1,2,3,4,5,6,7,8,9,10],2)
//josephus([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 40)
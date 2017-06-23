/*

n this kata, you will create a simple, immutable, singly-linked list.

Most list implementations use mutable nodes. Mutability brings with it a whole host of problems (especially in threaded environments, but even just with state saved and shared in multiple places). When you shift to immutable nodes, you gain a new ability to reason about things. If you have a list, it will never contain different things than it does at the moment.

However, when dealing with immutable nodes, one has to take special steps to try to maintain efficiency. For example, to add a node to the beginning of a list, you don't want to have to duplicate the whole list. You want to be able to share as many nodes of the list as possible between the original list and the newly generated list (while still being a singly-linked list).

There are two classes involved here: EmptyList and ListNode. Each of these should support the following operations: toString(), isEmpty(), length(), push(), remove(), and append(). If isEmpty() returns false, then the following two methods should also be supported: head() and tail().

var list0 = new EmptyList();        // => "()"
var list1 = list0.push(3);          // => "(3)"
var list2 = list1.push(2);          // => "(2 3)"
var list3 = list2.push(1);          // => "(1 2 3)"
var list13 = list1.append(list3);   // => "(3 1 2 3)"

list13.head()    // => 3
list13.tail()    // => list3

list1 instanceof ListNode
list1.tail() instanceof EmptyList
Diagramatically, this is what list3 above should look like:



Or, if you prefer JSON:

{ value: 1,
  next: { value: 2,
          next: { value: 3,
                  next: {} } } }
The EmptyList constructor takes no arguments. The ListNode constructor takes a value and a next parameter. The value parameter can be anything. The next parameter will be either a ListNode instance or an EmptyList instance representing the rest of the list after this node.

The toString() method should return "()" for an EmptyList and "(1 2 3)" for a list containing the numbers 1, 2, and 3.

The isEmpty() method will return true for EmptyList instances and false for the ListNode instances.

The length() method will return the number of non-EmptyList nodes in a list.

The orig.push(x) method will create a list whose first node contains the value x and where the new list shares as many nodes as possible with orig (while still being a singly-linked list).

The orig.remove(x) method will create a list where all nodes with value x are removed and which shares as many nodes as possible with orig (while still being a singly-linked list).

The orig.append(other) method will create a list which is a concatenation of all nodes in orig and all nodes in other and which shares as many nodes as possible with orig and other (while still being a singly-linked list).

If orig.isEmpty() returns false, then orig.head() should return the value in the first node of the list. The orig.tail() should return the sublist of orig containing all of the nodes except the first node in orig.

*/

/*

function Tree(name) {
  this.name = name;
}

var theTree = new Tree('Redwood');
console.log('theTree.constructor is ' + theTree.constructor);

var x = {a:1};
var y = {a:1};

// Looks like the same example huh!
alert (x == y); // It says false
Here, although the objects look identical but they hold diferent slots in memory. Reference store only the address of the object. Hence both references are different.

*/

function List() {}
function EmptyList() {}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;
EmptyList.prototype.toString = function() { return "()"; };
EmptyList.prototype.isEmpty = function() { if(this.value) return false; else return true; };
EmptyList.prototype.length = function() { return 0; };
EmptyList.prototype.push = function(x) {
  if(this.isEmpty()) {
    let newEmpty = new EmptyList();
    let newNode = new ListNode(x, newEmpty);
    return newNode;
  };
};
EmptyList.prototype.remove = function(x) { /* ? */ };
EmptyList.prototype.append = function(xs) {
  let nodeCount = 0;
  let newEmpty = new EmptyList();
  let newNode = new ListNode(nodeCount, newEmpty);
};

function ListNode(value, next) { this.value = value; this.next = next; }
ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() { if(this.value) return false; else return true; };
ListNode.prototype.toString = function() {
  let str = "";
  if(this.value) {
    str+=this.value + " ";
    let currentNode = this;
    while(currentNode.next.value) {
      str+=currentNode.next.value + " ";
      currentNode = currentNode.next;
    }
  }
  str = str.slice(0, -1);
  return ("("+str+")");
};
ListNode.prototype.head = function() { return this.value; };
ListNode.prototype.tail = function() { return this.next; };
ListNode.prototype.length = function() {
  let nodeCount = 1;
  let currentNode = this;
  while(currentNode.next.value) {
    nodeCount++;
    currentNode = currentNode.next;
  };
  return nodeCount;
};
ListNode.prototype.push = function(x) {
  // let nodeList = [];
  // let currentNode = this;
  // if (currentNode.isEmpty()) {
  //   let newEmpty = new EmptyList();
  //   let newNode = new ListNode(x, newEmpty);
  //   return newNode;
  // }else{
  //   while(currentNode.next || currentNode.length() == 1) {
  //     let currentValue = currentNode.value;
  //     let newEmpty = new EmptyList();
  //     let newNode = new ListNode(currentValue, newEmpty);
  //     nodeList.push(newNode);
  //     currentNode = currentNode.next;
  //   };
  //   for(let n=0; n<nodeList.length; n++) {
  //     if(nodeList[n+1]) nodeList[n].next = nodeList[n+1];
  //   }
  // }
  // let outNode = new ListNode(x, nodeList[0]);
  // return outNode;
  let currentNode = this;
  let outNode = new ListNode(x, currentNode);
  return outNode;
};
ListNode.prototype.remove = function(x) {
  let mainNode = this.push("copy");
  let currentNode = mainNode.next;
  let nextNode = currentNode.next;
  while(nextNode.value) {
    if (nextNode.value == x) {
      if(nextNode.next.isEmpty()) {
        let newEmpty = new EmptyList();
        currentNode.next = newEmpty;
        nextNode = currentNode.next;
      }else{
        currentNode.next = nextNode.next;
        nextNode = nextNode.next;
      }
    }else{
      currentNode = nextNode;
      nextNode = nextNode.next;
    }
  }
  return mainNode.next;
};
ListNode.prototype.append = function(xs) {
  let nodeCount = 0;
  let currentNode = xs;
  if (xs.value && xs.next) {
    nodeCount++;
    while(currentNode.next.value) {
      nodeCount++;
      currentNode = currentNode.next;
    }
  }
  let copyNode = xs.push(nodeCount);
  return copyNode;
};

var mt, l1, l2, l3, l4;
mt = new EmptyList();
l1 = mt.push('c').push('b').push('a');
l2 = l1.append(l1);
l3 = l1.remove('b');
l4 = l2.remove('b');

/*

Write a function evilTwin(obj) which returns a new object with all the same properties as obj, and with an additional property hasGoatee set to true.

For example:

var orig = {x: 5};
console.log(orig.x) // -> 5
console.log(orig.hasGoatee) // -> undefined
var twin = evilTwin(orig);
console.log(twin.x) // -> 5
console.log(twin.hasGoatee) // -> true
If the original object is modified, its twin should reflect the changes so:

orig.z = 12
console.log(twin.z) // -> 12

*/

// function clone(obj) {
//     if (null == obj || "object" != typeof obj) return obj;
//     var copy = obj.constructor();
//     for (var attr in obj) {
//         if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
//     }
//     return copy;
// }

// Object.prototype.constructor
// Returns a reference to the Object function that created the instance's prototype. Note that the value of this property is a reference to the function itself, not a string containing the function's name. The value is only read-only for primitive values such as 1, true and "test".

// var o = {
//   a: 2,
//   m: function(b){
//     return this.a + 1;
//   }
// };

// console.log(o.m()); // 3
// // When calling o.m in this case, 'this' refers to o

// var p = Object.create(o);
// // p is an object that inherits from o

// p.a = 12; // creates an own property 'a' on p
// console.log(p.m()); // 13
// // when p.m is called, 'this' refers to p.
// // So when p inherits the function m of o, 
// // 'this.a' means p.a, the own property 'a' of p

function evilTwin(obj) {
	var twin = Object.create(obj);
	twin.hasGoatee = true;
	return twin;
}


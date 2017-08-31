/*

Complete the method (or function in Python) to return true when its argument is an array that has the same nesting structure as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );

 // should return false
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
For your convenience, there is already a function 'isArray(o)' declared in the JS version that returns true if its argument is an array, false otherwise.

*/

// Return 'true' if and only if 'other' has the same
// nesting structure as 'this'.

// Note: You are given a function isArray(o) that returns
// whether its argument is an array.

Array.prototype.sameStructureAs = function (other) {
  // not even an array
  if ( !(Array.isArray(other)) ) return false;

  // set array blank
  function fillArray(arr) {
    for(let c=0; c < arr.length; c++) {
      if (Array.isArray(arr[c]) ) {
        fillArray(arr[c]);
      }else{
        arr[c] = 1;
      }
    }
  }
  fillArray(this);
  fillArray(other);
  // let currentArr = JSON.stringify(this);
  // let otherArr = JSON.stringify(other);
  // debugger;

  if( JSON.stringify( JSON.stringify(this) ) === JSON.stringify( JSON.stringify(other) ) ) return true;
  else return false;

};

[1,[1,1]].sameStructureAs([[2,2],2])

// recussion

Array.prototype.sameStructureAs = function (other) {
    return (this.length === other.length) ? this.every(function(el, i){
      return Array.isArray(el) ? el.sameStructureAs(other[i]) : true;
    }) : false;
};

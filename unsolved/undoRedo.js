/*

The purpose of this kata is to implement the undoRedo function.

This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

set(key, value) Assigns the value to the key. If the key does not exist, creates it.

get(key) Returns the value associated to the key.

del(key) removes the key from the object.

undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

After set() or del() are called, there is nothing to redo.

All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.

Any set/del after an undo should disallow new undos.

*/

let redux = [];
function undoRedo(object) {
  // let copy = JSON.parse(JSON.stringify(object));
  function setIt(key,value) {
    // console.log(this);

    redux.push(Object.assign({}, this));
    debugger;
    this[key] = value;
  }
  function getIt(key) {
    return redux[redux.length-1][key]
  }
  function delIt(key) {
    redux.push(JSON.parse(JSON.stringify(this)));
    delete this[key];
  }
  function undoIt() {
    return redux[redux.length-2];
  }

  object.set = setIt.bind(object);
  object.get = getIt.bind(object);
  object.del = delIt.bind(object);
  object.undo = undoIt.bind(object);

  redux.push(object);
  return object;
}
let thing = undoRedo({"test":"obj"});
thing.set("sup","nothin");
thing.get("sup");
// debugger;
thing.del("sup");
thing.undo();
thing.get("sup");
// console.log(redux);

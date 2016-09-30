/*

Given the below recipe for chocolate cake write a function cake() that takes two inputs: ingredient and amount.

The recipe should be adjusted according to the amount passed into the function. An Object containing all ingredients and their new amounts should be returned.

Example:
If I have just 80g of caster sugar, how much will I need of the other ingredients?

cake('caster sugar',80) => {'caster sugar': '80g', butter: '85g', eggs: 1.5, 'self-raising flour': '57.5g', 'cocoa powder': '27.5g'}

Note that the new amounts should be rounded to 1 decimal place and unit of measurement for amount will always be in grams, unless the ingredient is eggs.

Here is the original recipe:

160g caster sugar
170g butter
3 eggs
115g self-raising flour
55g cocoa powder
This is given in the initial solution.

Test.assertSimilar(cake('butter',55),
  {
    'caster sugar': '51.8g',
    butter: '55g',
    eggs: 1,
    'self-raising flour': '37.2g',
    'cocoa powder': '17.8g'
  }
);


*/
"use strict";
function cake(ingredient, amount){
  // original recipe
  var recipe = {
    'caster sugar': 160,
    'butter': 170,
    'eggs': 3,
    'self-raising flour': 115,
    'cocoa powder': 55
  };

  function map(obj, callback) {
      // create a new obj
      var result = {};
      // loop through each keyh
      // Object.keys(obj).forEach(function (key) {
      //     result[key] = callback.call(obj, obj[key], key, obj);
      // });
      Object.keys(obj).forEach((key) => {
        result[key] = callback.call(obj, key, obj[key])
      });
      return result;
  }
  var ratio = amount / recipe[ingredient];
  //var newObject = map(recipe, function(x) { return (x * ratio).toFixed(1); });
  var newRecipe = map(recipe, (a,b) => {
    //console.log(a,b);
    if (a!=='eggs') {
      return Number((b * ratio).toFixed(1)).toString() + 'g'
      //return (b * ratio).toFixed(1)
    }else{
      return parseFloat(Number((b * ratio).toFixed(1)).toString())
    }
  });
  console.log(newRecipe);

  // return {};
}
cake('butter',55);


// solution
//cake('cocoa powder',100.5)
//{'caster sugar': '292.4g', butter: '310.6g', eggs: 5.5, 'self-raising flour': '210.1g', 'cocoa powder': '100.5g'});

function cake(ingredient, amount){
  var recipe = {'caster sugar': 160,'butter': 170,'eggs': 3,'self-raising flour': 115,'cocoa powder': 55};
  function map(obj, callback) {
      var result = {};
      Object.keys(obj).forEach((key) => {result[key] = callback.call(obj, key, obj[key])});
      return result;
  }
  var ratio = amount / recipe[ingredient];
  var newRecipe = map(recipe, (a,b) => {
    if (a!=='eggs') {
      return Number((b * ratio).toFixed(1)).toString() + 'g'
    }else{
      return parseFloat(Number((b * ratio).toFixed(1)).toString())
    }
  });
  return newRecipe;
}

//best practice

//The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).

var obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj));
// [ ['foo', 'bar'], ['baz', 42] ]

const recipe = {'caster sugar': 160, 'butter': 170, 'eggs': 3, 'self-raising flour': 115, 'cocoa powder': 55};
const cake = (ingredient, amount) => {
  var mult = amount / recipe[ingredient];
  return Object.entries(recipe).reduce((res, [ogI, ogA]) => {
    let amount = +(ogA * mult).toFixed(1);
    res[ogI] = ogI === 'eggs' ? amount : `${ amount }g`;
    return res;
  }, {});
};

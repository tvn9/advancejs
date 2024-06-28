'use strict'
/*
// Exercise 4
function bigBrother() {
   function littleBrother() {
      return 'it is me!';
   }
   return littleBrother();

   function littleBrother() {
      return 'no me!';
   }
}

console.log(bigBrother()); // What will be returned here?

*/

const favFood = 'grapes'

const foodThoughts = function () {
   console.log('Original favorite food: ' + favFood)

   const favFood1 = 'sushi'

   console.log('New favorite food: ' + favFood1)
}

foodThoughts()

const testFunc = function () {
   console.log('Thanh Nguyen')
}

testFunc.call()
// Код 1

// var fn = (function() {
//     var numberOfCalls = 0;
//     return function() {
//         console.log(numberOfCalls);
//         return ++ numberOfCalls;
//     }
// })();
// fn();
// fn();
// fn();

// Код 2

// var createHelloFunction = function(name) {
//    return function() {
//       console.log('Hello, ' + name);
//    }
// }
// var sayHelloHabrahabr = createHelloFunction('Habrahabr');
// sayHelloHabrahabr(); //alerts «Hello, Habrahabr»


// Код 3

Function.prototype.bind = function(context) {
   var fn = this;
   return function() {
      return fn.apply(context, arguments);
   };
}
var HelloPage = {
   name: 'Habrahabr',
   init: function() {
      alert('Hello, ' + this.name);
   }
}
//window.onload = HelloPage.init; //алертнул бы undefined, т.к. this указывало бы на window
window.onload = HelloPage.init.bind(HelloPage); //вот теперь всё работает
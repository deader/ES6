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

// Function.prototype.bind = function(context) {
//    var fn = this;
//    return function() {
//       return fn.apply(context, arguments);
//    };
// }
// var HelloPage = {
//    name: 'Habrahabr',
//    init: function() {
//       alert('Hello, ' + this.name);
//    }
// }
// //window.onload = HelloPage.init; //алертнул бы undefined, т.к. this указывало бы на window
// window.onload = HelloPage.init.bind(HelloPage); //вот теперь всё работает

// Код 4

// var MyModule = {
//    name: 'Habrahabr',
//    sayPreved: function(name) {
//       alert('PREVED ' + name.toUpperCase())
//    },   
//    sayPrevedToHabrahabr: function() {
//       this.sayPreved(this.name);
//    }
// }
// MyModule.sayPrevedToHabrahabr();

// Код 5

// var MyModule = (function() {
//    var name = 'Habrahabr';
//    function sayPreved() {
//       alert('PREVED ' + name.toUpperCase());
//    }
//    return {
//       sayPrevedToHabrahabr: function() {
//          sayPreved(name);
//       }
//    }
// })();
// MyModule.sayPrevedToHabrahabr(); //alerts «PREVED Habrahabr»
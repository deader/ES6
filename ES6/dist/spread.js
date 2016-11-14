'use strict';

var staticlanguages = ['C', 'C++', 'Java'];
var dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

var languages = [].concat(staticlanguages, ['C#'], dynamicLanguages, ['Python']);

console.log(languages);

function add(x, y, z) {
    console.log(x + y + z);
}

var numbers = [1, 2, 3];

add.apply(undefined, numbers);
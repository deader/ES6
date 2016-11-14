let staticlanguages = ['C','C++','Java'];
let dynamicLanguages = ['JavaScript','PHP','Ruby'];

let languages = [...staticlanguages, 'C#', ...dynamicLanguages, 'Python'];

console.log(languages);

function add(x,y,z) {
    console.log(x + y + z);
}

let numbers = [1, 2, 3];

add(...numbers);
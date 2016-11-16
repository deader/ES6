'use strict';

(function () {

    //  Обьявляем массив
    var arr = [];

    // Заполнение массива элементами от 1 до 100 рандомно
    for (var i = 1; i < 100; i++) {
        arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
    }

    // Вывод массива в консоль
    console.log(arr);

    // Поиск min и max
    function findMinMax() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var operator = arguments[1];

        var max;
        var min;
        switch (operator) {
            case 'min':
                min = array[1];
                for (var _i = 1; _i < 100; _i++) {
                    if (array[_i + 1] < min) {
                        min = array[_i + 1];
                    }
                }
                console.log('min = ' + min);
                break;

            case 'max':
                max = array[1];
                for (var _i2 = 1; _i2 < 100; _i2++) {
                    if (array[_i2 + 1] > max) {
                        max = array[_i2 + 1];
                    }
                }
                console.log('max = ' + max);
                break;

            default:
                console.log('Вы ввели неверные параметры!!!');
        }
    }

    // Вывод min и max
    findMinMax(arr, 'min');
    findMinMax(arr, 'max');

    // преобразование массива в обьект вида структурированного массива
    function objArr() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var obj = {};
        var char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        for (var _i3 = 1; _i3 <= 26; _i3++) {
            obj[char[_i3 - 1]] = array[_i3];
            // document.write(char[i-1] + ' : ');
            // document.write(obj[char[i-1]] + '<br>');
            //console.log(`${char[i-1]} : ${array[i]}`);
        }

        for (var _i4 = 1; _i4 <= 74; _i4++) {
            obj[_i4] = array[_i4];
            // document.write(i + ' : ');
            // document.write(obj[i] + '<br>');
            //console.log(`${i} : ${array[i]}`);
        }
        return obj;
    }

    console.log(objArr(arr));

    var arr1 = [1, 2, 2, 2, 43, 32, 23, 6, 7, 8, 9];
    var arr2 = [14, 2, 13, 43, 23, 6, 7, 8, 9];

    // Удаление одинаковых элементов и вывод массива arr1 без них
    // function filterNew(arr1 = [], arr2 = []) { 
    //     arr1 = [arr1,...arr2];

    //     for (var i = 0; i <= arr1.length; i++) {
    //         for (var j = 1; j <= arr1.length; j++) {
    //             if (arr1[j] == arr1[i]) {  
    //                 arr1.splice(arr1[i]); // удаляем одинаковый элемент
    //             }    
    //         }
    //     }
    //     return arr1; // выводим массив без одинаковых элементов на экран
    // }
    // filterNew(arr1, arr2);
    // console.log(arr1);
    // console.log(filterNew(arr1, arr2));

    console.log(arr1);
    console.log(arr2);

    var arr = _.difference(arr1, arr2);
    console.log(arr);
})();
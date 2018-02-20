// Ejercicios: Métodos de arreglo

// Array para probar las funciones
var testArray = [6, 7, 8, 9, 10, 1, 2, 3, 4, 5];

myFunction(testArray, myForEach); //función de callback ejecutando forEach
myFunction(testArray, myMap); //función de callback ejecutando map
myFunction(testArray, myFilter); //función de callback ejecutando filter
myFunction(testArray, myReduce); //función de callback ejecutando reduce

// Revisar función sort
// myFunction(testArray, mySort); 

// función de callback
function myFunction(array, callback) {
    callback(array);
}

//función de forEach
function myForEach(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

//función de map
function myMap(array) {
    var arrayMap = [];
    for (var i = 0; i < array.length; i++) {
        arrayMap.push(array[i]);
    }
    console.log(arrayMap);
    return arrayMap;
}

//función de filter
function myFilter(array) {
    var arrayFilter = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 5) {
            arrayFilter.push(array[i]);
        }
    }
    console.log(arrayFilter);
    return arrayFilter;
}

//función de reduce
function myReduce(array) {
    var arrayReduce = [];
    var numbers = 0;
    for (var i = 0; i < array.length; i++) {
        numbers += array[i];
    }
    arrayReduce.push(numbers)
    console.log(arrayReduce);
    return arrayReduce;
}

//función de reduce (revisar)
// function mySort(array) {
//     var arraySort = [];
//     for (var i = 0; i < array.length; i++) {
//         for (var n = 1; n < array.length; n++) {            
//             if (array[i] < array[n]) {
//               ////revisar splice
//                 arraySort.push(array[i]);               
//                  console.log(arraySort);
//             }
//         }
//     }
//     // console.log(arraySort);    
// }
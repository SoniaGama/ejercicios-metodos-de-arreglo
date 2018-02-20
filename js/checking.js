// Revisándo funciones
console.log('Revisando funciones en clase:');

//función de forEach
// array.forEach(function de callback(/*elemento*/) { que ejecuta }); ---> ejemplo forEach

function myForEach(testArray, callback) {
    for (var i = 0; i < testArray.length; i++) {
        callback(testArray[i] /*element*/ );
    }
}

myForEach(testArray, function (element) {
    console.log(element);
})

// función de map
function myMap(testArray, callback) {
    var arrayMap = [];
    for (var i = 0; i < testArray.length; i++) {
        arrayMap.push(callback(testArray[i] /*element*/ ));
    }
    console.log(arrayMap);
    return arrayMap;
}

myMap(testArray, function (element) {
    return element * 2;
})


//función de filter
function myFilter(testArray, callback) {
    var arrayFilter = [];
    for (var i = 0; i < testArray.length; i++) {
        if (callback(testArray[i])) {
            arrayFilter.push(testArray[i]);
        }
    }
    console.log(arrayFilter);
    return arrayFilter;
}

myFilter(testArray, function (element) {
    return element >= 5;
})

//función de reduce
// [0, 1, 2, 3, 4].reduce(function (valorAnterior, valorActual, indice, vector) {
//     return valorAnterior + valorActual;
// });

function myReduce(testArray, callback, initilize) {   ;
    var acumulador = initilize;
    for (var i = 0; i < testArray.length; i++) {
        acumulador = callback(testArray[i], acumulador);

    }
    console.log(acumulador);
    return acumulador;
}

myReduce(testArray, function (element, acumulador) {
    return acumulador += element;
}, 0)
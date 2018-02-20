var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myFunction(testArray, myForEach);
myFunction(testArray, myMap);
myFunction(testArray, myFilter);
myFunction(testArray, myReduce);


function myFunction(array, callback) {
    callback(array);
}

function myForEach(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function myMap(array) {
    var arrayMap = [];
    for (var i = 0; i < array.length; i++) {
        arrayMap.push(array[i]);
    }
    console.log(arrayMap);
    return arrayMap;
}

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
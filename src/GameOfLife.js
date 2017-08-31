var clear = require("clear");
var inTest = false;

function testInit() {
    inTest = true;
}

function gameOfLife(rows, columns, rounds, testArray) {
    var mainArray = [];
    var secondArray = [];
    var secondArrayIsSet = false;
    var generation = 1;

    if (!testArray) {
        for (var x = 0; x < rows; x++) {
            mainArray.push([]);
            for (var y = 0; y < columns; y++) {
                if(Math.random() >= .5){mainArray[x].push(1);}
                else {mainArray[x].push(0)}
            }
        }
    } else {
        mainArray = testArray;
    }

    for (x = 0; x < mainArray.length; x++) {
        secondArray.push([]);
        for (y = 0; y < mainArray[x].length; y++) {
            secondArray[x].push(0);
        }
    }

    while (generation <= rounds) {
        console.log("Generation: " + generation);
        if (secondArrayIsSet) {
            mainArray = secondArray;
        }
        for (x = 0; x < mainArray.length; x++) {
            for (y = 0; y < mainArray.length; y++) {
                var count = 0;
                //is there a row above
                if (mainArray[x - 1]) {
                    if (mainArray[x - 1][y - 1]) {count++;}
                    if (mainArray[x - 1][y]) {count++}
                    if (mainArray[x - 1][y + 1]) {count++}
                }
                //check same row
                if (mainArray[x][y - 1]){count++}
                if (mainArray[x][y + 1]){count++}
                //is there a row below
                if (mainArray[x + 1]) {
                    if (mainArray[x + 1][y - 1]) {count++}
                    if (mainArray[x + 1][y]) {count++}
                    if (mainArray[x + 1][y + 1]) {count++}
                }

                if (mainArray[x][y] == 1){
                    if (count == 2 || count == 3) {
                        secondArray[x][y] = 1
                    }
                    else {
                        secondArray[x][y] = 0
                    }
                }
                else {
                    if (count == 3) {
                        secondArray[x][y] = 1
                    }
                    else {
                        secondArray[x][y] = 0
                    }
                }
            }
         }

         if (!inTest) {
            //console.log(secondArray);
            display(secondArray);
            var timeout = 1000000000;
            while (timeout > 0) {
                timeout--;
            }
            clear();
         }

         secondArrayIsSet = true;
         generation++;
    }

    return secondArray;
}

function display (array) {
    for (var x = 0; x < array.length; x++) {
        var row = "";
        for (var y = 0; y < array[x].length; y++) {
            var point = array[x][y] === 1 ? "*" : " ";
            row += point;
        }
        console.log(row);
    }
}

if (!inTest) {
    var finalArray = gameOfLife(10, 10, 1);
}

module.exports = {
    gameOfLifeFun : function (rows, columns, rounds, testArray) {
        if (testArray) {
            testInit();
        }
        return gameOfLife(rows, columns, rounds, testArray);
    }
}
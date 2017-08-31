var gol = require('../src/GameOfLife.js');

var case1 = [ [ 0, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
              [ 0, 1, 0, 0, 0, 0, 1, 1, 0, 0 ],
              [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
              [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
              [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
              [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
              [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
              [ 0, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
              [ 0, 1, 1, 0, 0, 0, 0, 0, 0, 0 ],
              [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ];

// describe(MANY COMPLEX PARAMETERS);
// describe("MY DESCRIPTION", MY_FUNCTION(MANY COMPLEX PARAMETERS);
describe(
//	My Description	
	"test Game Of Life functions",
//	My Funcion	
	function() {
		
		it(
			"cell 1,1 with 3 neighbors should remain alive",
			function() {
				//setup
//				var testArray = [[0,0,0], [0,0,0], [0,0,0]];

				var expected = 1;
				//execute
				var secondArray = gol.gameOfLifeFun(10,10, 1, case1);
				console.log(secondArray);
				var actual = secondArray[1][1];
				//confirm
				console.log("Actual: " + actual);
				console.log("Expected: " + expected);
				expect(actual).toBe(expected);
			}
		);

		it(
			"cell 7,1 with 1 neighbor should die",
			function() {
				//setup
//				var testArray = [[0,0,0], [0,0,0], [0,0,0]];

				var expected = 0;
				//execute
				var secondArray = gol.gameOfLifeFun(10,10, 1, case1);
				console.log(secondArray);
				var actual = secondArray[1][7];
				//confirm
				console.log("Actual: " + actual);
				console.log("Expected: " + expected);
				expect(actual).toBe(expected);
			}
		);

		it(
		    "should bring 0 back to life when there are 4 neighbors",
		    function() {
		        //setup
		        var expected = 1;
		        //execute
		        var secondArray = gol.gameOfLifeFun(10,10,1,case1);
		        console.log(secondArray);
		        var actual = secondArray[1][2];
		        //confirm
		        console.log("Actual: " + actual);
		        console.log("Expected: " + expected);
		        expect(actual).toBe(expected);
		    }
		)

		it(
		    "should not do anything when in a square",
		    function() {
		        //setup
		        var expected = 1;
		        //execute
		        var secondArray = gol.gameOfLifeFun(10,10,4,case1);
		        var actual1 = secondArray[7][1];
		        var actual2 = secondArray[7][2];
		        var actual3 = secondArray[8][1];
		        var actual4 = secondArray[8][2];
		        //confirm
		        expect(actual1).toBe(expected);
		        expect(actual2).toBe(expected);
		        expect(actual3).toBe(expected);
		        expect(actual4).toBe(expected);
		    }
		)
	}
);
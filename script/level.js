var simpleLevelPlan = [
	"x xxx                       ",
	"                            ",
	"                            ",
	"                            ",
	"                            ",
	"            xxxx            ",
	"                            ",
	"     xxxx        xxxxx      ",
	"                            ",
	"                            ",
	" xxxxxxxxxxxxxxxxxxxxxxxxx  ",
	" xxxxxxxxxxxxxxxxxxxxxxxxx  ",
	" xxxxxxxxxxxxxxxxxxxxxxxxx  ",
	"xxxxxxxxxxxxxxxxxxxxxxxxxx  ",
	"xxxxxxxxxxxxxxxxxxxxxxxxxx  "
];

var Level = function(plan){

	this.height = plan.length //= how many rows are in the array
	this.width = plan[0].length; //= how many columns in the array


	this.makeObjects = function(){
		var levelEl = document.getElementById('level')

		for(var i=simpleLevelPlan.length-1;i>=0; i--){

			for(var j=0;j<simpleLevelPlan[i].length; j++){

				if((simpleLevelPlan[i][j] == 'x')){
					var a = new Tile('wall', [j]*TILE, [i]*TILE);
					mapObjects.push(a);
				}else{

				}

			}
		}
	}

	this.render = function(){

	}

	this.makeObjects();


}

	// this.grid = [];
	// this.objectGrid = [];
	// this.drawLevel = function(){
	// // translate the inputted levelplan into a grid within level
	// 	for (var y = 0; y < this.height; y++) {
	// 		// look throug each row
	// 		var row = plan[y];
	// 		var gridRow = [];
	// 		for (var x = 0; x < this.width; x++) {
	// 			// look through each column
	// 			var column = row.charAt(x);
	// 			var tileType = null;
	// 			if (column === 'x') {
	// 				tileType = 'wall';
	// 			} else {
	// 			}
	// 			gridRow.push(tileType);
	// 		}
	// 		this.grid.push(gridRow);
	// 	}
	// }

	// this.drawBackground =function (){
	// 	//create a table with class background
	// 	var level = document.getElementById("level");
	// 	var table = ltb("table", "table");
	// 	// assign table with width from the levelPlan * TILE
	// 	table.style.width = this.width * TILE + 'px';

	// 	this.grid.forEach(function(row){
	// 	// look through all items in 'grid' and add an element, and an object to it
	// 		var rowLtb = table.appendChild(ltb('tr'));
	// 		// create a table row, and append it ot the table
	// 		rowLtb.style.height = TILE + 'px';
	// 		//set height of each row
	// 		row.forEach(function(type){
	// 			var el = ltb('td', type)
	// 			rowLtb.appendChild(el);
	// 			// var elRec = el.getBoundingClientRect()
	// 			// var elRecX = elRec.left
	// 			// var elRecY = elRec.top
	// 			// var tile = new Tile(type, elRecX, elRecY);
	// 			// objectGrid.push(tile);

	// 		});

	// 	});
	// 	//append gameboard to the level div
	// 	level.appendChild(table);
	// };
	// this.drawLevel();
	// this.drawBackground();
var simpleLevelPlan = [
	"xxxxx                       ",
	"                            ",
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
	" xxxxxxxxxxxxxxxxxxxxxxxxx  "
];

var Level = function(plan){

	this.height = plan.length //= how many rows are in the array
	this.width = plan[0].length; //= how many columns in the array
	this.grid = [];


	// translate the inputted levelplan into a grid within level
	for (var y = 0; y < this.height; y++) {
		// look throug each row
		var row = plan[y];
		var gridRow = [];
		for (var x = 0; x < this.width; x++) {
			// look through each column
			var column = row.charAt(x);
			var tileType = null;
			if (column === 'x') {
				tileType = 'wall'
			} else {
			}
			gridRow.push(tileType);
		}
		this.grid.push(gridRow);
	}

	this.drawBackground =function (){
		//create a table with class background
		var level = document.getElementById("level");
		var table = ltb("table", "level");
		// assign table with width from the levelPlan * scale
		table.style.width = this.width * scale + 'px';

		this.grid.forEach(function(row){
			var rowLtb = table.appendChild(ltb('tr'));
			rowLtb.style.height = scale + 'px';
			row.forEach(function(type){
				rowLtb.appendChild(ltb('td', type));
			});
		});
		//append gameboard to the level div
		level.appendChild(table);
	};

	this.render = function(){

	}

	for (var i = 0; i < this.height; i++) {


	}
}

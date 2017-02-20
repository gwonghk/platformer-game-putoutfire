///////////// Gameboard ////////////////////

var TILE = ?? // some distance in pixels
var METER = TILE
var FLOOR = { tilewidth , tileheight };

//governing movement
var GRAVITY = METER * 9.8 // can * a multiplyer
var MAXDX = METER * 20 // max horz speed in tiles/sec
var MAXDY = METER*20
var JUMP = METER*5 //some jump distance

/////////// View Window ///////////////////////





///////// Collision Functions ////////////////

function rangeIntersect(min0, max0, min1, max1) {
	// checks to see if 2 lines overlap
	// wrapped up in math max/min because lines can be in negative positions
	return Math.max(min0, max0) >= Math.min(min1, max1) &&  Math.min(min0, max0) <= Math.max(min1, max1);
}

function recIntersect(r0, r1) {
	// checks collision if x AND y of two objects overlap
	return rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) && recIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);
}




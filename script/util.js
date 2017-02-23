//-----------------------------------------------
// Utility

function ltb(name, className) {
	// create a HTML element, and give it a class name.
	// remember to use 'string' for both args!
  	var letThereBe = document.createElement(name);
  	if (className) letThereBe.className = className;
	return letThereBe;
}

function timestamp() {
	// if there is a timestamp, get it, if not, make one out of current date&time
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

//-----------------------------------------------
// Collision Functions

function rangeIntersect(min0, max0, min1, max1) {
	// checks to see if 2 lines overlap
	// wrapped up in math max/min because lines can be in negative positions
	return Math.max(min0, max0) >= Math.min(min1, max1) &&  Math.min(min0, max0) <= Math.max(min1, max1);
}

function recCollide(r0, r1) {
	// checks collision if x AND y of two objects overlap
	return rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) && rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);
}

// function recCollideObj(r0, r1) {
// 	// checks collision if x AND y of two objects overlap
// 	if (rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height) && rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width)){
// 		debugger;
// 		return r1
// 	}
// }

/*
function bound(x, min, max) {
	//this is used to find the middle number, given 3 numbers
	return Math.max(min, Math.min(max, x));
}

function obstacleAt(obj){
	// half digested function, tried to see what was needed to calculate the area surrounding hero. 
	// this could then be used to look for collision
	var xStart = Math.floor(obj.x);
	var xEnd = Math.ceil(obj.x + obj.width);
	var yStart = Math.floor(obj.y);
	var yEnd = Math.ceil(obj.y + obj.height);

}
*/
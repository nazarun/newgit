// class Square
function Square(width, height){
	this.width = width;
	this.height = height;
	this.getArea = function(){
		return this.width * this.height;
	}
}
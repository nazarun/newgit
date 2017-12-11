// class Square
function Square(width, height){
	this.width = width;
	this.height = height;
	this.getArea = function(){
		return this.width * this.height;
	}
}

//class Circle
function Circle(r){
	Square.apply(this, arguments);
	this.r = r;
	const Pi = 3.14;
	this.getArea = function(){
		return Pi * this.r * this.r;
	}
}

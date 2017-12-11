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

//class Area
function Area(){
	this._figures = [];
	
	this.addFigure = function(figure){
		this._figures.push(figure);
	};
	this.clear = function(){
		this._figures = [];
	};
	Object.defineProperty(this, "size", {
		get: function(){
			var areaSum = 0;
			for(var x=0; x<this._figures.length; x++){
			areaSum	+= this._figures[x].getArea();
			};			
			return areaSum;
		}
	});
}

//testing
var figure1 = new Square(10, 15);
var figure2 = new Square(15, 15);
var circle1 = new Circle(15);
var area = new Area();
area.addFigure(figure1);
area.addFigure(figure2);
area.addFigure(circle1);
console.log("Size: ", area.size);
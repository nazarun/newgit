function sum(min, max){
	var sum = 0;
	if(min >= max){return false;}
	for(var x = min; x <= max; x++){
		if(x % 2 === 0 && x % 3 === 0){
			sum += x;	
		}		
	}
	console.log(sum);
}

sum(10,20);

//task b
function sumB(){
	var sum = 0;
	for(var x = 0; x < arguments.length; x++){
		sum += arguments[x];		
	}
	console.log(sum);	
}

sumB(5,10);

//task c
function sumRecursively(max){	
	if (max == 1){return 1;}		
	return max + sumRecursively(max - 1);	
}

sumRecursively(100);

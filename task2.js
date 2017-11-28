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

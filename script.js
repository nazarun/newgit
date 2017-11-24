//while
var sum=0, x=1;
while(x<=100){
	sum+=x;
	x++;
}
console.log(sum);

//for
var sum=0;
for(var x=1; x<=100; x++){
	if(x%2 === 0 && x%3 === 0){
		sum+=x;
	}
}
console.log(sum);
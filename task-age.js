function Age(birth){
	var mlsDate = Date.parse(birth.toString());
	var now = Date.now(); 
	var age = now - mlsDate;	
	return Math.floor(yearFromMilisec(age));
}

function yearFromMilisec(mls){
	return mls / 1000 / 60 / 60 / 24 / 30.5 / 12;
}

Age(new Date(1990, 0, 26));
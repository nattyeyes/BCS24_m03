console.log("Hello, welcome to De La Salle University!");

function computeSupply(age, amountPerDay) {
	const MAX_AGE = 80;
	let yearsLeft = MAX_AGE - age;
	let amountToConsume = yearsLeft * Math.round(amountPerDay);
	console.log(`You need ${amountToConsume} to last you until the ripe old age of ${MAX_AGE}`)
};

computeSupply(10, 30);
computeSupply(20, 26);
computeSupply(25, 17.5);
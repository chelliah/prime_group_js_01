var arrayAtticus = ["Atticus", "2405", "47000", 3]; // name, employee number, annual income, employee rating
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];


function createNewArray(inputArray){
	var name = inputArray[0];
	var employeeNumber = inputArray[1];
	var annualIncome = parseInt(inputArray[2]); //converts income to number
	var employeeRating = inputArray[3];

	var outputArray = []; //initializes the new Array

	outputArray.push(name); //add the name of the employee to the ouptut Array

	var sti = calcSTI(employeeNumber, annualIncome, employeeRating); 
	outputArray.push(sti); //adds the sti% to the output Array

	var totalBonus = calcTotalBonus(sti,annualIncome); 

	var adjustedIncome = annualIncome + totalBonus; //adjusted income is calculated by adding annual income with bonus

	outputArray.push(adjustedIncome); //adds adjusted income to the output array

	outputArray.push(totalBonus); //adds total bonus to the output array

	return outputArray;
}

function calcSTI (empNum, annIncome, empRating){ //function calculates bonus percentage, represeted as a decimal value, based on three input arguments
	var sti = 0;
	switch(empRating){
		case 2:
			sti = 0;
			break;
		case 3:
			sti = 4;
			break;
		case 4:
			sti = 6;
			break;
		case 5:
			sti = 10;
			break;
		default:
			sti = 0;
			break;
	}
	if(empNum.length==4){
		sti += 5;
	}
	if(annIncome>65000){
		sti -= 1;
	}
	if(sti>13){
		sti = 13;
	}
	return sti/100; //returns a decimal value representing the bonus percentage given to an employee
}

function calcTotalBonus (sti, annIncome){ //function takes in two inputs, sti percent and annual income, and ouputs the total bonus by multiplying these values
	return Math.round(sti*annIncome);
}

console.log(createNewArray(arrayAtticus));
console.log(createNewArray(arrayJem));
console.log(createNewArray(arrayBoo));
console.log(createNewArray(arrayScout));

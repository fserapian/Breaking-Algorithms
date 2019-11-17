/*
Given an array of integers, replace all ocurrences of elementToReplace
with substitutionElement

Ex: arr = [1, 2, 1], elementToReplace = 1, substitutionElement = 5,
	 arrayReplace(arr, elementToReplace, substitutionElement) = [5, 2, 5];
*/


function arrayReplace(inputArray, elementToReplace, substitutionElement) {
	return inputArray
		.map(element => element === elementToReplace ? substitutionElement : element);
}

console.log(arrayReplace([1, 2, 1], 1, 5));
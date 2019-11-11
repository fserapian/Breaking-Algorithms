// add a border around the array (build a wall)
// picture = ["abc",
//            "ded" ]  ===  
// picture = ["****",
//            "*abc*",
//            "*ded*",
//            "*****"]

// 1st attempt
// function addBorder(arr) {
// 	arr.unshift('***');
// 	arr.push('***');
// 	const newArr = arr.map(element => '*'.concat(element.concat('*')));
// 	return newArr;
// }

// function addBorder(arr) {
// 	// size of the wall
// 	const wallSize = arr[0].length + 2;
// 	let wall = '';
// 	for (let i = 0; i < wallSize; i++) {
// 		wall += '*';
// 	}
// 	arr.unshift(wall);
// 	arr.push(wall);

// 	return arr.map(element => element[0] !== '*' ? '*'.concat(element, '*') : element);
// }

function addBorder(arr) {
	const wall = '*'.repeat(arr[0].length + 2);

	arr.unshift(wall);
	arr.push(wall);
	for (let i = 1; i < arr.length - 1; i++) {
		arr[i] = '*'.concat(arr[i], '*');
	}
	return arr;
}

console.log(addBorder(["abc", "def"]));
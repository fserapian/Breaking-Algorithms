/********************* ADD BORDER *********************/
/*
  Add a border around the array (build a wall)
  picture = ["abc",
            "ded" ]

  =>

  picture = ["****",
             "*abc*",
             "*ded*",
             "*****"]
*/

function addBorder(arr) {
  const wall = '*'.repeat(arr[0].length + 2);

  arr.unshift(wall);
  arr.push(wall);

  for (let i = 1; i < arr.length - 1; i++) {
    // arr[i] = '*'.concat(arr[i], '*');
    // arr[i] = '*' + arr[i] + '*';
    arr[i] = `*${arr[i]}*`;
  }

  return arr;
}

console.log(addBorder(['abc', 'def']));

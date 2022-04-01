/************************** SUFFLE ARRAY ELEMENTS *************************/
/*
    Write a function that suffles elements of an array.
*/

const shuffle = (arr) => {
  curId = arr.length;

  while (curId > 0) {
      randId = Math.floor(Math.random() * curId);
      curId -= 1;

      let temp = arr[curId];
      arr[curId] = arr[randId];
      arr[randId] = temp;
  }

  return arr;
};

const shuffle2 = (arr) =>
    arr.map((el) => ({ id: Math.random(), value: el }))
        .sort((a, b) => a.id - b.id)
        .map((el) => el.value);

console.log(shuffle([1, 2, 3, 4, 5, 6]));
console.log(shuffle2([1, 2, 3, 4, 5, 6]));

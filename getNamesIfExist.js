/*************** GET NAMES IF EXIST ********************/
/*
  Given an array with objects inside:
  objArr = [
    { a: 1 },
    { name: 'Jane' },
    {},
    { name: 'Mark' },
    { name: 'Sophia' },
    { b: 2 },
  ];

  Write a function getNamesIfExist that returns the array of names:
  getNamesIfExist(objArr) => ['Jane', 'Mark', 'Sophia'];
*/

function getNamesIfExist(objArr) {
  const res = [];

  for (el of objArr) {
    if ('name' in el) {
      res.push(el.name);
    }
  }

  return res;
}

objArr = [
  { a: 1 },
  { name: 'Jane' },
  {},
  { name: 'Mark' },
  { name: 'Sophia' },
  { b: 2 },
];

console.log(getNamesIfExist(objArr));

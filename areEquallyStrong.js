/********************* ARE EQUALLY STRONG *********************/
/*
  yourLeft = 10, yourRight = 15, friendsLeft = 15, friendsRight = 10
  areEqualyStrong(yourLeft, yourRight, friendsLeft, friendsRight) === true;
  yourLeft = 10, yourRight = 15, friendsLeft = 15, friendsRight = 9
  areEqualyStrong(yourLeft, yourRight, friendsLeft, friendsRight) === false;
*/

function areEqualyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourWeakestArm = yourLeft <= yourRight ? yourLeft : yourRight;
  const yourStrongestArm = yourLeft >= yourRight ? yourLeft : yourRight;

  const friendsWeakestArm =
    friendsLeft <= friendsRight ? friendsLeft : friendsRight;
  const friendsStrongestArm =
    friendsLeft >= friendsRight ? friendsLeft : friendsRight;

  const areWeakestArmsEqual = yourWeakestArm === friendsWeakestArm;
  const areStrongestArmsEqual = yourStrongestArm === friendsStrongestArm;

  return areWeakestArmsEqual && areStrongestArmsEqual;
}

console.log(areEqualyStrong(10, 15, 15, 10));
console.log(areEqualyStrong(15, 10, 15, 9));

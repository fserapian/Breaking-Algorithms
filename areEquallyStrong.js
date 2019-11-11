

// yourLeft = 10, yourRight = 15, friendsLeft = 15, friendsRight = 10
// areEqualyStrong(yourLeft, yourRight, friendsLeft, friendsRight) === true;
// yourLeft = 10, yourRight = 15, friendsLeft = 15, friendsRight = 9
// areEqualyStrong(yourLeft, yourRight, friendsLeft, friendsRight) === false;

function areEqualyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
	const yourWeakestArm = yourLeft <= yourRight ? yourLeft : yourRight;
	const yourStrongestArm = yourLeft >= yourRight ? yourLeft : yourRight;
	const friendsWeakestArm = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
	const friendsStrongestArm = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

	return (yourWeakestArm === friendsWeakestArm && yourStrongestArm === friendsStrongestArm);

}

console.log(areEqualyStrong(15, 10, 15, 9));
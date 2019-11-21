/* 
Given a year, return the century it is in.
The first century spans from the year 1 up to
and including the year 100, the second - from
the year 101 up to and including the year 2000
etc.

Ex: For year = 1905, centuryFromYear(year) = 20.
	For yaer = 1700, centuryFromYear(year) = 17
*/

function centuryFromYear(year) {
	return Math.ceil(year / 100); 
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
/******************** HTML END TAG BY START TAG ********************/
/*
	You are implementing your own HTML editor. To make it more comfortable for
	developers you would like to add auto-completion feature to it.
	Given the starting HTML tag, find the appropriate end tag which your editor
	should propose.

	Examples:
	For startTag = "<button type='button' disabled>",
		htmlEndTagByStartTag(startTag) = '</button>'

	For startTag = "<i>",
		htmlEndTagByStartTag(startTag) = '</i>'		

*/

function htmlEndTagByStartTag(startTag) {
	endTag = '</';
	for (let i = 1; i < startTag.length; i++) {
		if (startTag[i] === ' ' || startTag[i] === '>') {
			break;
		}
		endTag += startTag[i];
	}

	return endTag + '>';
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag("<i>"));
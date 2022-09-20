/**
 * Splits text into spans with ability to conditionally add a highlight class
 * @param text text to be split into spans
 * @param highlighted words to highlight, if any
 * @returns array of objects: char: the character, highlight: boolean determines if the character should be highlighted
 */
function textToSpans(text, highlighted) {
	let spans = [];
	const highlight = (word) =>
		highlighted ? highlighted.includes(word) : false;
	const words = text.split(" ").join("$ $").split("$");
	words.forEach((word) => {
		word.split(/(?=[,.])/).forEach((word) => {
			if (word.length > 1) {
				word.split("").forEach((char) => {
					spans.push({ char: char, highlight: highlight(word) });
				});
			} else {
				spans.push({ char: word, highlight: highlight(word) });
			}
		});
	});
	return spans;
}

export default textToSpans;

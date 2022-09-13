/**
 * @param {Number} min min boundary
 * @param {Number} max max boundary
 * @returns a random number between min and max
 */
export const randBetween = (min, max) => {
	if (!min) return console.error("Missing min value");
	if (!max) return console.error("Missing max value");
	if (typeof min !== Number || typeof max !== Number)
		return console.error("Params must be numbers");
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

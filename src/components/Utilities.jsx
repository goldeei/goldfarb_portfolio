/**
 * @param {float} min min boundary
 * @param {float} max max boundary
 * @returns a random number between min and max
 */
export const randBetween = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

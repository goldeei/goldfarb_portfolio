import { motion } from "framer-motion";
import React from "react";

/**
 * Takes an animation to apply individually to a block of characters
 * * Requires a parent variant to be set on the container for transition animation parameters, stagger, etc
 * @param {string} text the text to be split into spans and animated
 * @param {dictionary} variant the animation variant to be used
 * @returns individual spans containing the characters of the provided text
 */
export const AnimateWords = ({ text, variant }) => {
	if (!text) return console.error("No text provided");
	if (!variant) return console.error("No variant provided");
	return text.split("").map((char, index) => {
		return (
			<motion.span variants={variant} key={char + "-" + index}>
				{char}
			</motion.span>
		);
	});
};

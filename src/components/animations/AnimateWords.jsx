import { motion } from "framer-motion";

/**
 * Takes an animation to apply individually to a block of characters
 * * Requires a parent variant to be set on the container for transition animation parameters, stagger, etc
 * @param text the text to be split into spans and animated
 * @param variant the animation variant to be used
 * @returns individual spans containing the characters of the provided text
 */
export const AnimateWords = ({ text, variant }) => {
	return text.split("").map((char, index) => {
		return (
			<motion.span variants={variant} key={char + "-" + index}>
				{char}
			</motion.span>
		);
	});
};
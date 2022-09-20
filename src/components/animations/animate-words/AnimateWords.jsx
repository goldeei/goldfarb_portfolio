import { motion } from "framer-motion";
import React from "react";

import textToSpans from "./textToSpans";

/**
 * Animates text by character and highlights important words
 * @prop text - text to animate
 * @prop variant - the motion variant
 * @prop highlightText - text to be highlighted
 * @prop highlightClass - the highlight
 * @returns Animated, individual, spans of the provided text
 */
export const AnimateWords = ({ ...props }) => {
	const { text, variant, highlightText, highlightClass } = { ...props };
	const spans = textToSpans(text, highlightText);
	console.table(spans);
	return spans.map((span, i) => {
		return (
			<motion.span
				key={i}
				variants={variant}
				className={span.highlight ? highlightClass : null}
			>
				{span.char}
			</motion.span>
		);
	});
};

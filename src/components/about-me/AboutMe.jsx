import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";

import { title, subtitle, body, highlighted } from "./Content";
import { AnimateWords } from "../animations/animate-words/AnimateWords";
import { randBetween } from "../Utilities";
import Banners from "../banners/Banners";

const sentence = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: randBetween(0.06, 0.09),
			duration: 1,
		},
	},
};
const letter = {
	hidden: {
		display: "none",
	},
	visible: {
		display: "inline",
	},
};

function AboutMe() {
	const [sub, showSubtitle] = useState(false);
	const [main, showMain] = useState(false);
	return (
		<Banners>
			<LayoutGroup>
				<motion.h1
					layout
					initial="hidden"
					animate="visible"
					variants={sentence}
					onAnimationComplete={() => showSubtitle(true)}
				>
					<AnimateWords
						highlightText={highlighted}
						highlightClass="highlight"
						text={title}
						variant={letter}
					/>
				</motion.h1>
				{sub && (
					<motion.h4
						layout
						initial="hidden"
						animate="visible"
						variants={sentence}
						onAnimationComplete={() => showMain(true)}
					>
						<AnimateWords
							highlightText={highlighted}
							highlightClass="highlight"
							text={subtitle}
							variant={letter}
						/>
					</motion.h4>
				)}
				{main && (
					<motion.p
						layout
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.25, duration: 0.65 }}
					>
						{body}
					</motion.p>
				)}
			</LayoutGroup>
		</Banners>
	);
}

export default AboutMe;

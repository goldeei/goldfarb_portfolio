import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

import { AnimateWords } from "../animations/AnimateWords";
import { randBetween } from "../Utilities";
import Banners from "../banners/Banners";

const title = "Hi I'm Jake Goldfarb";
const subtitle = "I'm a UI Designer, Frontend Developer, and Data Analyst";
const body =
	"I enjoy using creative approaches to creating web apps and data visualizations that make them enjoyable, approachable, and accessible using modern Javascript frameworks and libraries.";

const sentence = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: randBetween(0.06, 0.075),
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
					<AnimateWords text={title} variant={letter} />
				</motion.h1>
				{sub && (
					<motion.h4
						layout
						initial="hidden"
						animate="visible"
						variants={sentence}
						onAnimationComplete={() => showMain(true)}
					>
						<AnimateWords text={subtitle} variant={letter} />
					</motion.h4>
				)}
				{main && (
					<motion.p
						layout
						initial={{ opacity: 0, scale: 1.15 }}
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

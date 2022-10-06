import { motion } from "framer-motion";
import styled from "styled-components";

import * as layout from "../styling/Layout";

const variants = {
	visible: {
		opacity: 1,
	},
	hidden: {
		opacity: 0,
	},
};

export const Backdrop = ({ children, onClick }) => {
	return (
		<StyledBackdrop
			initial="hidden"
			animate="visible"
			exit="hidden"
			transition={{
				duration: 0.1,
			}}
			variants={variants}
			onClick={onClick}
		>
			{children}
		</StyledBackdrop>
	);
};

const StyledBackdrop = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.4);
`;

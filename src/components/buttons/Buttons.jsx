import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { TbArrowsMaximize, TbArrowsMinimize } from "react-icons/tb";

import styled, { useTheme } from "styled-components";

import "./Buttons.css";

// Returns a close button that animates red on hover, scale on click
// handleClose set by parent to close element
export const CloseButton = ({ style, handleClose }) => {
	const theme = useTheme();
	return (
		<motion.button
			onClick={handleClose}
			// var --scale allows for scale to be set by parent while still animating for reusability
			initial={{ color: theme.colors.mainText }}
			whileTap={{ scale: 0.9 }}
			whileHover={{
				scale: 1.1,
				color: "rgb(255,0,0)",
			}}
			transition={{
				duration: 0.05,
				ease: "easeInOut",
			}}
		>
			<IoClose style={{ transform: "scale(var(--scale))" }} as={motion.svg} />
		</motion.button>
	);
};

export const FSButton = ({ ...props }) => {
	const { fullscreen, onClick } = { ...props };
	const ref = useRef(null);
	const test = () => {
		console.log("huh");
	};
	function handleClick() {
		console.log("handled");
	}
	return (
		<StyledFSButton ref={ref} onClick={handleClick}>
			<AnimatePresence mode="wait">
				{!fullscreen ? (
					<TbArrowsMaximize
						transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
						onPointerUp={onClick}
					/>
				) : (
					<TbArrowsMinimize
						transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
						onPointerUp={onClick}
					/>
				)}
			</AnimatePresence>
		</StyledFSButton>
	);
};

const StyledFSButton = styled(motion.button)`
	position: absolute;
	top: 0;
	right: 0;
	margin: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.25rem;
	svg {
		scale: 1.5;
	}
`;

export const ButtonBase = ({ ...props }) => {
	const { children, onClick } = { ...props };
	return (
		<StyledButtonBase
			whileHover={{ scale: 1.07 }}
			whileTap={{ scale: 1 }}
			transition={{
				ease: "easeInOut",
				duration: 0.15,
			}}
			onClick={onClick}
		>
			{children}
		</StyledButtonBase>
	);
};

const StyledButtonBase = styled(motion.button)`
	background-color: ${(props) => props.theme.colors.primary};
	padding: 0.1rem 0.5rem;
	> svg {
		color: ${(props) => props.theme.colors.mainText};
	}
`;

export const ThemeSwitcher = ({ ...props }) => {
	const { onClick, isDark } = { ...props };
	return (
		<ButtonBase onClick={onClick}>
			{isDark ? <IoSunnyOutline /> : <IoMoonOutline />}
		</ButtonBase>
	);
};

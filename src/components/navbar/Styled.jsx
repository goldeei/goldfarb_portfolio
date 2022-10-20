import { motion } from "framer-motion";

import styled from "styled-components";
import * as layout from "../styling/Layout";

export const Nav = styled.nav`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	z-index: ${layout.zIndex("navbar")};
`;

export const NavbarNav = styled.ul(
	({ theme }) => `
		position: relative;
		background-color: ${theme.colors.primary};
		margin: 0.2rem auto;
		padding: 0;
		height: 3.25rem;
		border-radius: 0.15rem;
		max-width: ${layout.defMax};
		list-style-type: none;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: ${theme.frontShadow};
	`
);

export const NavbarItem = styled(motion.li)`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	/* Links */
	> a {
		font-size: clamp(0.6rem, 2vw, 0.8rem);
		text-decoration: none;
		text-align: center;
		flex: 1;
		cursor: pointer;
	}
`;

// Indicator
export const Underline = styled(motion.div)`
	position: absolute;
	bottom: 0.25rem;
	width: 60%;
	height: clamp(0.2rem, 0.4vw, 0.25rem);
	background: ${(props) => props.theme.colors.highlight};
	border-radius: 8px;
`;

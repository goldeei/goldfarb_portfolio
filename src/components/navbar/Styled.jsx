import { motion } from "framer-motion";

import styled from "styled-components";
import * as Layout from "../styling/Layout";

export const Nav = styled.nav`
	position: fixed;
	left: 0;
	top: 0;
	z-index: ${Layout.zIndex("control")};
	width: 100%;
`;

export const NavbarNav = styled.ul`
	margin: 0 auto;
	padding: 0;
	max-width: ${Layout.defMax};
	list-style-type: none;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

export const NavbarItem = styled(motion.li)`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	& > a {
		font-size: clamp(0.6rem, 2vw, 0.8rem);
		padding: 0.6rem 1.5rem;
		text-decoration: none;
		text-align: center;
		flex: 1;
		color: rgb(0, 0, 0);
	}
`;

export const Underline = styled(motion.div)`
	position: absolute;
	bottom: 0.25rem;
	width: 60%;
	height: clamp(0.2rem, 0.4vw, 0.25rem);
	background: #04d9ff;
	border-radius: 8px;
`;

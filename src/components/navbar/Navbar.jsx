import React, { FC, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";
import { SiAboutdotme } from "react-icons/si";

import { activeSectionState } from "../../Atoms";
import "./Navbar.css";
import NavButton from "./NavButton";

// const variants = {
// 	center: { width: "50vw" },
// 	top: {
// 		position: "fixed",
// 		top: 0,
// 		left: 0,
// 		width: "100vw",
// 		transition: {
// 			delayChildren: 0.5,
// 		},
// 	},
// };

export default function Navbar({ children }) {
	const testRef = useRef();

	const [activeSection, setActiveSection] = useRecoilState(activeSectionState);
	const landingPage = activeSection === "landing-page" ? true : false;

	return (
		<motion.nav
			className={"navbar"}
			// transition={{ duration: 0.25, type: "tween" }}
			// animate={landingPage ? "center" : "top"}
			// variants={variants}
		>
			<div
				ref={testRef}
				className={`navbar-nav ${landingPage ? "navbar-center" : "navbar-top"}`}
			>
				<NavButton title={"About"} />
				<NavButton title={"Frontend"} />
				<NavButton title={"Data"} />
				<NavButton title={"About Me"} />
				<NavButton title={"About Me"} />
			</div>
		</motion.nav>
	);
}

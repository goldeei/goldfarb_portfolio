import { motion } from "framer-motion";
import { NavbarItem } from "./Styled";
import { useTheme } from "styled-components";

function Navbutton({ title, href, onClick, children, active }) {
	const theme = useTheme();
	const initial = { scale: 1, color: theme.colors.mainText };
	const highlight = { scale: 1.1, color: theme.colors.blueHighlight };
	return (
		<NavbarItem href={href}>
			<motion.a
				href={href}
				onClick={onClick}
				animate={active ? highlight : initial}
				transition={{ duration: 0.25, ease: "easeOut" }}
			>
				{title}
			</motion.a>
			{children}
		</NavbarItem>
	);
}

export default Navbutton;

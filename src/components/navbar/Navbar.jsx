import { useRecoilState } from "recoil";
import { LayoutGroup, motion } from "framer-motion";

import Navbutton from "./Navbutton";
import "./Navbar.css";
import { activeSectionState } from "../../Atoms";

const links = ["About Me", "Web Dev", "Data Analytics", "Design"];
const kebab = (text) => `${text.toLowerCase().replace(" ", "-")}`;

const underline = {
	position: "absolute",
	bottom: 3,
	width: "60%",
	height: "0.3rem",
	background: "black",
	borderRadius: "8px",
	zIndex: 1000,
};
function Navbar() {
	const [active, setActive] = useRecoilState(activeSectionState);
	return (
		<nav id="navbar">
			<LayoutGroup id="navbar-indicator">
				<ul id="navbar-nav">
					{links.map((link) => (
						<Navbutton
							key={kebab(link)}
							href={`#${kebab(link)}`}
							title={link}
							onClick={() => setActive(kebab(link))}
						>
							{active === kebab(link) ? (
								<motion.div
									style={underline}
									transition={{ layout: { duration: 0.25, ease: "easeOut" } }}
									layoutId="underline"
								/>
							) : null}
						</Navbutton>
					))}
				</ul>
			</LayoutGroup>
		</nav>
	);
}

export default Navbar;

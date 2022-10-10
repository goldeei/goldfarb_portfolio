import { useRecoilState } from "recoil";
import { LayoutGroup } from "framer-motion";

import { Nav, NavbarNav, Underline } from "./Styled";
import Navbutton from "./Navbutton";
import { activeSectionState } from "../../Atoms";

const links = ["About Me", "Web Dev", "Data Analytics", "Design"];
const kebab = (text) => `${text.toLowerCase().replace(" ", "-")}`;

function Navbar({ ...props }) {
	const { children } = { ...props };
	const [active, setActive] = useRecoilState(activeSectionState);

	const handleNavClick = (id) => {
		console.log(id);
		setActive(id);
		document.getElementById(id).scrollIntoView(true);
	};

	return (
		<Nav id="navbar">
			<NavbarNav id="navbar-nav">
				<LayoutGroup id="navbar-indicator">
					{links.map((link) => (
						<Navbutton
							key={kebab(link)}
							title={link}
							onClick={() => handleNavClick(kebab(link))}
							active={active === kebab(link)}
						>
							{active === kebab(link) ? (
								<Underline
									transition={{ layout: { duration: 0.25, ease: "easeOut" } }}
									layoutId="underline"
								/>
							) : null}
						</Navbutton>
					))}
				</LayoutGroup>
				{children}
			</NavbarNav>
		</Nav>
	);
}

export default Navbar;

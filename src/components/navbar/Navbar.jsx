import { useRecoilState } from "recoil";
import { LayoutGroup } from "framer-motion";

import { Nav, NavbarNav, Underline } from "./Styled";
import Navbutton from "./Navbutton";
import { activeSectionState } from "../../Atoms";

const links = ["About Me", "Web Dev", "Data Analytics", "Design"];
const kebab = (text) => `${text.toLowerCase().replace(" ", "-")}`;

function Navbar() {
	const [active, setActive] = useRecoilState(activeSectionState);
	return (
		<Nav id="navbar">
			<NavbarNav id="navbar-nav">
				<LayoutGroup id="navbar-indicator">
					{links.map((link) => (
						<Navbutton
							key={kebab(link)}
							href={`#${kebab(link)}`}
							title={link}
							onClick={() => setActive(kebab(link))}
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
			</NavbarNav>
		</Nav>
	);
}

export default Navbar;

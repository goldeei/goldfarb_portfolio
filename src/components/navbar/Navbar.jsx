import Navbutton from "./Navbutton";
import "./Navbar.css";

const links = ["About Me", "Web Dev", "Data Analytics", "Design"];

function Navbar() {
	return (
		<nav id="navbar">
			<ul id="navbar-nav">
				{links.map((link) => (
					<Navbutton title={link} />
				))}
			</ul>
		</nav>
	);
}

export default Navbar;

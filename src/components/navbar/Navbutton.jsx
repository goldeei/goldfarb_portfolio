function Navbutton({ title }) {
	const href = `#${title.toLowerCase().replace(" ", "-")}`;

	return (
		<li className="navbar-item">
			<a key={href} href={href}>
				{title}
			</a>
		</li>
	);
}

export default Navbutton;

import { useEffect, useState } from "react";

function Navbutton({ title, href, onClick, children }) {
	return (
		<li className="navbar-item">
			<a href={href} onClick={onClick}>
				{title}
			</a>
			{children}
		</li>
	);
}

export default Navbutton;

import { motion } from "framer-motion";

const variants = {
	initial: { color: "rgb(0,0,0)", scale: 1 },
	active: { color: "rgb(0,173,204)", scale: 1.1 },
};

function Navbutton({ title, href, onClick, children, active }) {
	return (
		<motion.li className="navbar-item">
			<motion.a
				href={href}
				onClick={onClick}
				animate={active ? "active" : "initial"}
				transition={{ duration: 0.25, ease: "easeOut" }}
				variants={variants}
			>
				{title}
			</motion.a>
			{children}
		</motion.li>
	);
}

export default Navbutton;

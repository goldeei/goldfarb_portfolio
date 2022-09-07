import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import "./Buttons.css";

// Returns a close button that animates red on hover, scale on click
// handleClose set by parent to close element
export const CloseButton = ({ style, handleClose }) => {
	return (
		<motion.button
			style={style}
			onClick={handleClose}
			// var --scale allows for scale to be set by parent while still animating for reusability
			initial={{ "--scale": style.scale }}
			whileTap={{ "--scale": style.scale * 0.8 }}
			whileHover={{
				color: "rgb(255,0,0)",
			}}
			transition={{
				duration: 0.2,
				ease: "easeInOut",
			}}
		>
			<IoClose style={{ transform: "scale(var(--scale))" }} as={motion.svg} />
		</motion.button>
	);
};

import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import "./Buttons.css";

// Returns a close button that animates red on hover, scale on click
// handleClose set by parent to close element
export const CloseButton = ({ style, handleClose }) => {
	return (
		<motion.button
			layout
			style={style}
			// var --scale allows for scale to be set by parent while still animating for reusability
			initial={{ "--scale": style.scale }}
			whileTap={{ "--scale": style.scale * 0.9 }}
			whileHover={{
				color: "rgb(255,0,0)",
			}}
			onClick={handleClose}
		>
			<AiOutlineClose
				layout
				style={{ transform: "scale(var(--scale))" }}
				as={motion.svg}
			/>
		</motion.button>
	);
};

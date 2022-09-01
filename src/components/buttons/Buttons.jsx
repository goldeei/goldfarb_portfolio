import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import "./Buttons.css";

// handleClose set by parent to close element
export const CloseButton = ({ style, handleClose }) => {
	return (
		<motion.button
			style={style}
			whileHover={{ y: -2 }}
			whileTap={{ scale: 0.9 }}
			onClick={handleClose}
		>
			<AiOutlineClose />
		</motion.button>
	);
};

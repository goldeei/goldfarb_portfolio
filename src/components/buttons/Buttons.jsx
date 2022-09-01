import { motion } from "framer-motion"

import "./Buttons.css"

function CloseButton() {
	return (
		<motion.button
			style={}
			whileHover={{ y: -2 }}
			whileTap={{ scale: 0.9 }}
			onClick={handleClose}
		>
			<AiOutlineClose />
		</motion.button>
	);
}

export default CloseButton;

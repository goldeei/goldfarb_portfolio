import { motion } from "framer-motion";

const variants = {
	visible: {
		opacity: 1,
	},
	hidden: {
		opacity: 0,
	},
};

export const Backdrop = ({ children, onClick }) => {
	return (
		<motion.div
			className="modal-backdrop"
			initial="hidden"
			animate="visible"
			exit="hidden"
			transition={{
				duration: 0.1,
			}}
			variants={variants}
			onClick={onClick}
		>
			{children}
		</motion.div>
	);
};

import { motion } from "framer-motion";

export const Backdrop = ({ children, onClick }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="modal-backdrop"
			onClick={onClick}
		>
			{children}
		</motion.div>
	);
};

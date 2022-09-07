import React, { useState } from "react";
import Modal from "../modal/Modal";
import { IoMailOutline } from "react-icons/io5";
import "./Contact.css";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
	hidden: {
		right: -100,
	},
	visible: {
		right: 0,
	},
};

export default function Contact() {
	const [isOpen, setModalOpen] = useState(false);
	const close = () => setModalOpen(false);
	return (
		<>
			<AnimatePresence>
				{!isOpen && (
					<motion.div
						className="contact-icon__wrapper"
						whileHover={{ scale: 1.07 }}
						whileTap={{ scale: 1 }}
						transition={{
							ease: "easeInOut",
							duration: 0.15,
						}}
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={variants}
						onPointerUp={() => setModalOpen(true)}
					>
						<IoMailOutline as={motion.svg} className="contact-icon" />
					</motion.div>
				)}
			</AnimatePresence>
			<Modal open={isOpen} handleClose={close} content={undefined} />
		</>
	);
}

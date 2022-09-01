import React, { useState } from "react";
import Modal from "../modal/Modal";

import { BiMessageSquareDetail } from "react-icons/bi";
import "./Contact.css";
import { AnimatePresence, motion } from "framer-motion";

export function Contact() {
	const [isOpen, setModalOpen] = useState(false);
	const close = () => setModalOpen(false);

	return (
		<>
			{!isOpen && (
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="contact-icon__wrapper"
					>
						<BiMessageSquareDetail
							onPointerUp={() => setModalOpen(true)}
							className="contact-icon"
						/>
					</motion.div>
				</AnimatePresence>
			)}
			<Modal open={isOpen} handleClose={close} content={undefined} />
		</>
	);
}

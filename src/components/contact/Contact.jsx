import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ButtonBase } from "../buttons/Buttons";
import Modal from "../modal/Modal";
import { IoMailOutline } from "react-icons/io5";

export default function Contact() {
	const [isOpen, setModalOpen] = useState(false);
	const close = () => setModalOpen(false);
	return (
		<>
			<ButtonBase onClick={() => setModalOpen(!isOpen)}>
				<IoMailOutline as={motion.svg} />
			</ButtonBase>
			<Modal open={isOpen} handleClose={close} content={undefined} />
		</>
	);
}

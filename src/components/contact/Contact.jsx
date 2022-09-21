import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import * as Styled from "./Styled";
import Modal from "../modal/Modal";
import { IoMailOutline } from "react-icons/io5";

const variants = {
	hidden: {
		bottom: -100,
	},
	visible: {
		bottom: 0,
	},
};

export default function Contact() {
	const [isOpen, setModalOpen] = useState(false);
	const close = () => setModalOpen(false);
	return (
		<>
			<Styled.Wrapper>
				<AnimatePresence>
					{!isOpen && (
						<Styled.Container>
							<Styled.Icon
								as={motion.div}
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
								<IoMailOutline as={motion.svg} />
							</Styled.Icon>
						</Styled.Container>
					)}
				</AnimatePresence>
			</Styled.Wrapper>
			<Modal open={isOpen} handleClose={close} content={undefined} />
		</>
	);
}

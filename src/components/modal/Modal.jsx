import React, { CSSProperties, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseButton } from "../buttons/Buttons";
import { Backdrop } from "./Backdrop";
import "./modal.css";

//Todo transfer to styled, refactor
const variants = {
	hidden: {
		top: "-100%",
	},
	visible: {
		top: "25%",
	},
};

const closeButtonStyle = {
	position: "absolute",
	top: 0,
	right: 0,
	margin: "0.75rem",
	scale: 1.4,
};

export default function Modal({ content, open, handleClose }) {
	return (
		<>
			<AnimatePresence>
				{open && (
					<Backdrop onClick={handleClose}>
						<motion.div
							key="modal"
							className="modal-container"
							initial="hidden"
							animate="visible"
							exit="hidden"
							transition={{ duration: 0.25, ease: "easeInOut" }}
							variants={variants}
							onClick={(e) => e.stopPropagation()}
						>
							<CloseButton handleClose={handleClose} style={closeButtonStyle} />
							<div className="modal-content">{content}</div>
						</motion.div>
					</Backdrop>
				)}
			</AnimatePresence>
		</>
	);
}

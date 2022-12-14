import React, { CSSProperties, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Backdrop } from "./Backdrop";
import "./modal.css";

const variants = {
	open: {
		position: "fixed",
		top: "25%",
		left: 0,
		right: 0,
		margin: "auto",
		padding: "1rem",
		width: "80vw",
		height: "50%",
		borderRadius: "0.5rem",
		backgroundColor: "white",
	},
	closed: {
		backgroundColor: "transparent",
		position: "initial",
		top: "initial",
		left: "initial",
		right: "initial",
		width: "initial",
		margin: "initial",
	},
};

export default function Modal({ content, open, handleClose }) {
	return (
		<>
			<AnimatePresence>
				{open && (
					<Backdrop onClick={handleClose}>
						<motion.div
							className="modal-container"
							onClick={(e) => e.stopPropagation()}
						>
							{content}
						</motion.div>
					</Backdrop>
				)}
			</AnimatePresence>
		</>
	);
}

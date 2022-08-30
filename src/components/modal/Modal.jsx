import React, { CSSProperties, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import "./modal.css";

const open = {
	position: "fixed",
	top: "25%",
	left: 0,
	right: 0,
	margin: "auto",
	padding: "1rem",
	width: "80vw",
	height: "50%",
	maxWidth: "500px",
	maxHeight: "500px",
	backgroundColor: "white",
	borderRadius: "0.5rem",
	zIndex: 1001
};

const closed = {
	position: "initial",
	width: "initial",
	borderRadius: "initial",
	zIndex: 0
}

export default function Modal() {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<AnimatePresence>
			{isOpen && 
				<motion.div 
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="modal-backdrop"
				/>
			}
			</AnimatePresence>
			<AnimatePresence>
				<motion.div className="modal-container" style={isOpen ? open : closed} layout>
					{!isOpen && (
						<motion.span layout onPointerDown={() => setOpen(!isOpen)}>
							<BiMessageSquareDetail />
						</motion.span>
					)}
					{isOpen && (
						<motion.div layout className="modal-icon__close" onPointerDown={() => setOpen(!isOpen)}>
							<AiOutlineClose />
						</motion.div>
					)}
				</motion.div>
			</AnimatePresence>
		</>
	);
}

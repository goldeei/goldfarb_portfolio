import React, { CSSProperties, useState } from "react";
import { motion } from "framer-motion";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import "./Modal.css";

const open = {
	position: "fixed",
	top: "25%",
	width: "50%",
	height: "50%",
	backgroundColor: "white",
};

export default function Modal({ closed }) {
	const [isOpen, setOpen] = useState(false);

	return (
		<motion.div style={isOpen ? open : closed} layout>
			{!isOpen && (
				<div onPointerDown={() => setOpen(!isOpen)}>
					<BiMessageSquareDetail />
				</div>
			)}
			{isOpen && (
				<div onPointerDown={() => setOpen(!isOpen)}>
					<AiOutlineClose />
				</div>
			)}
		</motion.div>
	);
}

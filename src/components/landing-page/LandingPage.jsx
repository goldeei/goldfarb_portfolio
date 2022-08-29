import { motion } from "framer-motion";
import Modal from "../modal/Modal";

const style = {
	width: "200px",
	backgroundColor: "blue",
};

export default function LandingPage() {
	return (
		<div className="fullscreen center-children">
			<div className="title">Jake Goldfarb</div>
			<Modal closed={style} />
		</div>
	);
}

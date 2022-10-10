import { motion } from "framer-motion";
import styled from "styled-components";

function Card({ ...props }) {
	const { title, img } = { ...props };
	return <img alt={title} src={img} />;
}

export default Card;

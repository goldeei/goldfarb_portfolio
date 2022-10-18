import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { Block } from "../styling/components/Block";

function Card({ ...props }) {
	const { project, fullscreen } = { ...props };
	const { projectTitle, summary, details } = { ...project };
	const isDark = JSON.parse(window.localStorage.getItem("darkMode"));

	return (
		<StyledCard
			as={motion.div}
			initial={{ x: "-100%" }}
			animate={{ x: "0%" }}
			exit={{ x: "-100%" }}
			transition={{
				type: "spring",
				duration: 0.4,
				bounce: 0,
			}}
		>
			{/* <Text>
				<div style={{ display: "flex", flexDirection: "row" }}>
					<h3 style={{ flex: 1 }}>{projectTitle}</h3>
				</div>
			</Text> */}
			{details.map((item, i) => (
				<CardDetails
					isDark={isDark}
					key={i}
					details={item}
					fullscreen={fullscreen}
				/>
			))}
			<Text>
				<h3 style={{ flex: 1 }}>{projectTitle}</h3>
				<h5>{summary}</h5>
			</Text>
		</StyledCard>
	);
}

const CardDetails = ({ ...props }) => {
	const { fullscreen, details, isDark } = { ...props };
	const { title, description, images } = { ...details };
	useEffect(() => {});
	return (
		<DetailsContainer>
			{/* {fullscreen && (
				<div>
					<h5>{title}</h5>
					<h6>{description}</h6>
				</div>
			)} */}

			{/* TODO - Figure out way to match parent switch method, match light dark */}
			<Image src={images[0].src} />
		</DetailsContainer>
	);
};
const StyledCard = styled(Block)`
	display: grid;
	grid-template-rows: 6fr 2fr;
`;
const DetailsContainer = styled.div`
	max-height: 100%;
	display: flex;
`;

const Image = styled(motion.img)`
	width: 100%;
	object-fit: contain;
`;

const Text = styled.div`
	h3 {
		color: ${(props) => props.theme.colors.mainText};
	}
	h5 {
		margin: 0.25rem 0;
		color: ${(props) => props.theme.colors.subText};
	}
`;

export default Card;

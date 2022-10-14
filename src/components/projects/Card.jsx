import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BiFullscreen, BiLinkExternal } from "react-icons/bi";

import { ButtonBase } from "../buttons/Buttons";

const Image = styled(motion.img)`
	position: absolute;
	background-color: ${(props) => props.theme.colors.primary};
	box-shadow: ${(props) => props.theme.containerDropShadow};
	border-radius: 0.2rem;
	margin-top: 0.25rem;
	width: 100%;
	height: 100%;
`;

const Controls = styled.div`
	display: inline-flex;
	align-items: center;
	width: 20%;
	justify-content: space-around;
	z-index: 2;
	position: relative;
`;
const CardContainer = styled.div``;

function Card({ ...props }) {
	const { project, fullscreen } = { ...props };
	const { projectTitle, summary, details } = { ...project };
	const isDark = JSON.parse(window.localStorage.getItem("darkMode"));

	return (
		<>
			{details.map((item, i) => (
				<Detail
					isDark={isDark}
					key={i}
					details={item}
					fullscreen={fullscreen}
				/>
			))}
			<Text initial={{ x: -100 }} animate={{ x: 0 }} isDark={isDark}>
				<div style={{ display: "flex", flexDirection: "row" }}>
					<h3 style={{ flex: 1 }}>{projectTitle}</h3>
					<Controls>
						<ButtonBase>
							<BiFullscreen />
						</ButtonBase>
						<ButtonBase>
							<BiLinkExternal />
						</ButtonBase>
					</Controls>
				</div>
				<h5>{summary}</h5>
			</Text>
		</>
	);
}

const Detail = ({ ...props }) => {
	const { fullscreen, details, isDark } = { ...props };
	const { title, description, images } = { ...details };
	useEffect(() => {});
	return (
		<StyledDetail>
			{fullscreen && (
				<div>
					<h5>{title}</h5>
					<h6>{description}</h6>
				</div>
			)}
			<div>
				{/* TODO - Figure out way to match parent switch method, match light dark */}
				<Image src={images[0].src} />
			</div>
		</StyledDetail>
	);
};

const Text = styled(motion.div)`
	padding: 1rem;
	background-color: ${(props) => props.theme.colors.primary};
	border-radius: 0.2rem;
	width: 100%;
	min-height: 30%;
	box-sizing: border-box;
	> * {
		color: ${(props) => props.theme.colors.mainText};
	}
	h3 {
		margin: 0.5rem 0;
		color: ${(props) => props.theme.colors.mainText};
	}
	h5 {
		margin: 0.25rem 0;
		color: ${(props) => props.theme.colors.subText};
	}
`;

const StyledDetail = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	margin-bottom: 0.5rem;
	img {
		width: 100%;
		object-fit: contain;
	}
`;

export default Card;

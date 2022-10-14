import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BiFullscreen, BiLinkExternal } from "react-icons/bi";

import { ButtonBase } from "../buttons/Buttons";

const Image = styled(motion.img)`
	position: absolute;
	background-color: ${(props) => props.theme.colors.primary};
	border-radius: 0.2rem;
	margin-top: 0.25rem;
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
			<Text isDark={isDark}>
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
			{details.map((item, i) => (
				<Detail
					isDark={isDark}
					key={i}
					details={item}
					fullscreen={fullscreen}
				/>
			))}
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
				<AnimatePresence initial={false} mode="wait">
					{images.map((image, i) => {
						if (image.type === "dark" && isDark) {
							return (
								<Image
									key={i}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										duration: 0.2,
									}}
									src={image.src}
								></Image>
							);
						} else if (
							(image.type === "light" || image.type === undefined) &&
							!isDark
						) {
							return (
								<Image
									key={i}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										duration: 0.2,
									}}
									src={image.src}
								></Image>
							);
						}
					})}
				</AnimatePresence>
			</div>
		</StyledDetail>
	);
};

const Text = styled.div`
	position: absolute;
	bottom: 0;
	padding: 1rem;
	background-color: ${(props) => props.theme.colors.primary};
	border-radius: 0.2rem;
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
	img {
		width: 100%;
		object-fit: contain;
	}
`;

export default Card;

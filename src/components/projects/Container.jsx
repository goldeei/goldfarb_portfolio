import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import usePaginateCollection from "../../hooks/usePaginateCollection";
// import Controls from "./Controls";
import Nav from "./Nav";
import Container from "../styling/components/Container";
import { Block } from "../styling/components/Block";
import ProjectCard from "./Card";
import { ButtonBase } from "../buttons/Buttons";
import { BiFullscreen, BiLinkExternal } from "react-icons/bi";

const variants = {
	enter: (direction) => {
		return {
			rotateY: direction > 0 ? -90 : 90,
		};
	},
	center: {
		rotateY: 0,
	},
	exit: (direction) => {
		return {
			rotateY: direction < 0 ? -90 : 90,
		};
	},
};

function ProjectContainer({ ...props }) {
	const { title, projects } = { ...props };
	const [index, dir, paginate, handleNav] = usePaginateCollection(projects);
	const ref = useRef(!null);
	return (
		<CardContainer ref={ref} height={"70%"}>
			<Block>
				<h1>{title}</h1>
				<Controls>
					<ButtonBase>
						<BiFullscreen />
					</ButtonBase>
					<ButtonBase>
						<BiLinkExternal />
					</ButtonBase>
				</Controls>
			</Block>
			{/* <Controls onClick={paginate} /> */}
			<AnimatePresence mode="wait" custom={dir} initial={false}>
				<ProjectCard
					key={index}
					custom={dir}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{ duration: 0.25 }}
					project={projects[index]}
				/>
			</AnimatePresence>
			<Nav collection={projects} index={index} onClick={handleNav} />
		</CardContainer>
	);
}

const Controls = styled.div`
	display: inline-flex;
	align-items: center;
	width: 20%;
	justify-content: space-around;
	z-index: 2;
	position: relative;
	margin-left: auto;
	color: black;
	> svg {
		fill: black;
		scale: 3;
	}
`;

//TODO Theme light shadow
const CardContainer = styled(Container)`
	display: grid;
	grid-template-rows: 1.2fr 7fr 1.5fr;
	background-color: ${(props) => props.theme.colors.primary_05};

	${(props) => {
		const radius = props.theme.defaultRadius;
		return css`
			box-shadow: ${props.theme.midShadow}
			border-radius: ${radius};
			> div:not(div:first-child, div:last-child) {
				border-radius: 0;
			}
			> div:first-child {
				border-radius: ${radius} ${radius} 0 0;
				z-index: 2;
			}
			> div:last-child {
				border-radius: 0 0 ${radius} ${radius};
				z-index: 2;
				box-shadow: ${props.theme.midShadowTop};
			}
		`;
	}}
`;

export default ProjectContainer;

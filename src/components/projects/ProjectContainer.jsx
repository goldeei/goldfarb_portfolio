import { useState, useRef } from "react";
import styled, { css } from "styled-components";
import {
	motion,
	AnimatePresence,
	useMotionValue,
	LayoutGroup,
} from "framer-motion";
import { IoCaretBackOutline } from "react-icons/io5";
import { useRecoilValue } from "recoil";

import Container from "../styling/components/Container";
import { FSButton } from "../buttons/Buttons";
import { activeSectionState } from "../../Atoms";
import * as layout from "../styling/Layout";
import ProjectCard from "./ProjectCard";
import { wrap } from "@popmotion/popcorn";
import { useEffect } from "react";

const variants = {
	enter: (direction) => {
		return {
			x: direction > 0 ? -750 : 750,
		};
	},
	center: {
		x: 0,
	},
	exit: (direction) => {
		return {
			x: direction < 0 ? -750 : 750,
		};
	},
};

const Item = ({ ...props }) => {
	const { title, children, onClick } = { ...props };

	return (
		<ItemButton onClick={onClick}>
			{title}
			{children}
		</ItemButton>
	);
};

const Indicator = styled.div`
	height: 0.25rem;
	width: 100%;
	background-color: lightgrey;
	position: absolute;
	top: -1rem;
	left: 0;
	border-radius: 0.25rem;
	overflow: hidden;
	& .active {
		border-radius: inherit;
		width: 100%;
		height: 100%;
		background-color: blue;
	}
`;

const ComponentNav = ({ collection, index, onClick }) => {
	//console.log(index);
	return (
		<NavContainer>
			{/* <LayoutGroup id="indicator"> */}
			{collection.map((item, i) => (
				<Item key={i} title={item.label} onClick={() => onClick(i)}>
					<Indicator>
						<LayoutGroup>
							{index === i ? (
								<>
									<motion.div
										className="active"
										transition={{ layout: { duration: 0.5, ease: "easeOut" } }}
										layoutId="indicator"
									/>
								</>
							) : null}
						</LayoutGroup>
					</Indicator>
				</Item>
			))}
			{/* </LayoutGroup> */}
		</NavContainer>
	);
};

const animationDuration = 0.2;

function ProjectContainer({ ...props }) {
	const { collection, title } = { ...props };
	const [[item, dir], setItem] = useState([0, 0]);
	const itemIndex = wrap(0, collection.length, item);
	const [fullscreen, setFullscreen] = useState(false);
	const activeSection = useRecoilValue(activeSectionState);
	const ref = useRef(!null);
	const handleNav = (i) => {
		let buttonDir;
		i < item ? (buttonDir = -1) : (buttonDir = 1);
		//Todo cycle per item until it reaches desired function
		setItem([i, buttonDir]);
	};

	const paginate = (newDir) => {
		setItem([item + newDir, newDir]);
	};
	useEffect(() => {
		if (fullscreen)
			document.getElementById(ref.current.parentNode.id).scrollIntoView();
	}, [fullscreen]);
	useEffect(() => {
		if (activeSection !== ref.current.parentNode.id) {
			setFullscreen(false);
		}
	}, [activeSection]);
	return (
		<Container ref={ref}>
			<h1>{title}</h1>
			<FSButton
				onClick={() => setFullscreen(!fullscreen)}
				fullscreen={fullscreen}
			/>
			<Controls>
				<button className="next" onClick={() => paginate(1)}>
					<IoCaretBackOutline />
				</button>
				<button className="prev" onClick={() => paginate(-1)}>
					<IoCaretBackOutline />
				</button>
			</Controls>
			<ContentWrapper>
				<AnimatePresence mode="wait" custom={dir}>
					<Content
						key={itemIndex}
						custom={dir}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{ duration: 0.25 }}
					>
						<ProjectCard
							title={collection[itemIndex].label}
							img={collection[itemIndex].imgSrc}
						/>
					</Content>
				</AnimatePresence>
			</ContentWrapper>
			<ComponentNav
				collection={collection}
				custom={dir}
				index={itemIndex}
				onClick={handleNav}
			/>
		</Container>
	);
}

const ItemButton = styled(motion.button)`
	border: 1px solid black;
	padding: 0.5rem 1rem;
	flex: 1;
	margin: 0 0.25rem;
	position: relative;
`;
const NavContainer = styled.div`
	margin: auto;
	display: flex;
	justify-content: space-around;
	width: 80%;
	margin-top: 0.5rem;
`;

const ContentWrapper = styled.div`
	background-color: ${(props) => props.theme.colors.background};
	flex: 1;
	box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
	overflow: hidden;
	display: flex;
	justify-content: center;
`;
const Content = styled(motion.div)`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const buttonOffset = "0.75rem";

const Controls = styled.div`
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	height: 2rem;
	z-index: ${layout.zIndex("control")};
	button {
		cursor: pointer;
		background-color: black;
		border-radius: 0.25rem;
		padding: 0.65rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	button > svg {
		fill: white;
		scale: 2.75;
	}
	.next {
		position: absolute;
		right: ${buttonOffset};
		transform: scaleX(-1);
	}
	.prev {
		position: absolute;
		left: ${buttonOffset};
	}
`;

export default ProjectContainer;

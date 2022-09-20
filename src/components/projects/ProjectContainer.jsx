import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

import { defMax, zIndex } from "../styling/Layout";
import ProjectCard from "./ProjectCard";
import { wrap } from "@popmotion/popcorn";

const variants = {
	enter: (direction) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		x: 0,
		opacity: 1,
	},
	exit: (direction) => {
		return {
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

function ProjectContainer({ ...props }) {
	const { collection, title } = { ...props };

	const [[item, dir], setItem] = useState([0, 0]);
	const itemIndex = wrap(0, collection.length, item);

	const paginate = (newDir) => {
		setItem([item + newDir, newDir]);
	};

	return (
		<Container>
			<h1>{title}</h1>
			<Wrapper>
				<Controls>
					<button className="next" onClick={() => paginate(1)}>
						Next
					</button>
					<button className="prev" onClick={() => paginate(-1)}>
						Prev
					</button>
				</Controls>
				<AnimatePresence mode="wait" custom={dir}>
					<Content
						key={itemIndex}
						custom={dir}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{ duration: 0.2 }}
					>
						<ProjectCard
							title={collection[itemIndex].label}
							img={collection[itemIndex].imgSrc}
						/>
					</Content>
				</AnimatePresence>
			</Wrapper>
		</Container>
	);
}

const Container = styled.div`
	max-width: max(500px, 50%);
	background-color: white;
`;

const Content = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
	user-select: none;
`;

const Controls = styled.div`
	position: absolute;
	width: 100%;
	height: 2rem;
	display: flex;
	align-items: center;
	z-index: 2;
	button {
		font-size: 1rem;
		cursor: pointer;
		background-color: white;
		margin: 0.5rem;
	}
	.next {
		position: absolute;
		right: 0;
	}
	.prev {
		position: absolute;
		left: 0;
	}
`;

const Wrapper = styled(motion.div)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	img {
		width: 100%;
	}
`;

export default ProjectContainer;

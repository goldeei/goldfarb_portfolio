import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import usePaginateCollection from "../../hooks/usePaginateCollection";
import Controls from "./Controls";
import Nav from "./Nav";
import Container from "../styling/components/Container";
import ProjectCard from "./Card";

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
	const { collection, title, projects } = { ...props };
	const [isFullscreen, setFullscreen] = useState(false);
	const [index, dir, paginate, handleNav] = usePaginateCollection(projects);
	const ref = useRef(!null);

	return (
		<Container ref={ref}>
			<h1>{title}</h1>
			<Controls onClick={paginate} />
			<Nav
				collection={projects}
				custom={dir}
				index={index}
				onClick={handleNav}
			/>
			<ContentWrapper>
				<AnimatePresence mode="wait" custom={dir} initial={false}>
					<Content
						key={index}
						custom={dir}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{ duration: 0.25 }}
					>
						<ProjectCard project={projects[index]} fullscreen={isFullscreen} />
					</Content>
				</AnimatePresence>
			</ContentWrapper>
		</Container>
	);
}

const ContentWrapper = styled.div`
	height: 100%;
	overflow: hidden;
	display: flex;
	justify-content: center;
`;
const Content = styled(motion.div)`
	position: relative;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	user-select: none;
`;

export default ProjectContainer;

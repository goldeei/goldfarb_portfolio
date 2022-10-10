import { useRef } from "react";
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

function ProjectContainer({ ...props }) {
	const { collection, title, projects } = { ...props };

	const [index, dir, paginate, handleNav] = usePaginateCollection(collection);
	const ref = useRef(!null);

	return (
		<Container ref={ref}>
			<h1>{title}</h1>
			<Controls onClick={paginate} />
			<ContentWrapper>
				<AnimatePresence mode="wait" custom={dir}>
					<Content
						key={index}
						custom={dir}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{ duration: 0.25 }}
					>
						<ProjectCard
							title={collection[index].label}
							img={collection[index].imgSrc}
						/>
					</Content>
				</AnimatePresence>
			</ContentWrapper>
			<Nav
				collection={collection}
				custom={dir}
				index={index}
				onClick={handleNav}
			/>
		</Container>
	);
}

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

export default ProjectContainer;

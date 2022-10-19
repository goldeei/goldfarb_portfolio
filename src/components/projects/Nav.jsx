import { motion, LayoutGroup } from "framer-motion";
import styled from "styled-components";

import { Block } from "../styling/components/Block";

export default function ComponentNav({ collection, index, onClick }) {
	//console.log(index);
	return (
		<NavContainer>
			{/* <LayoutGroup id="indicator"> */}
			{collection.map((item, i) => (
				<Item key={i} title={item.projectTitle} onClick={() => onClick(i)}>
						<LayoutGroup>
							{index === i ? (
								<Indicator
									
									key={i} 
									transition={{
										layout: { duration: 0.5, ease: "easeOut" },
									}}
									layoutId="indicator" />
							) : null}
						</LayoutGroup>
				</Item>
			))}
			{/* </LayoutGroup> */}
		</NavContainer>
	);
}

const NavContainer = styled(Block)`
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
`;
const Item = ({ ...props }) => {
	const { title, children, onClick } = { ...props };

	return (
		<ItemButton onClick={onClick}>
			{title}
			{children}
		</ItemButton>
	);
};
const ItemButton = styled(motion.button)`
	padding: 0.5rem 1rem;
	flex: 1;
	margin: 0 0.25rem;
	position: relative;
	font-size: 0.75rem;
	box-shadow: ${(props) => props.theme.buttonShadow};
	border-radius: ${(props) => props.theme.defaultRadius};
	color: ${(props) => props.theme.colors.mainText};
	background-color: ${(props) => props.theme.colors.primary};
	overflow: hidden;
`;

const Indicator = styled(motion.div)`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: -1;
	border-radius: 0.25rem;
	overflow: hidden;
`;

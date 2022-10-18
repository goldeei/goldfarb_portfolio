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
					<Indicator>
						<LayoutGroup>
							{index === i ? (
								<>
									<motion.div
										className="active"
										transition={{
											layout: { duration: 0.5, ease: "easeOut" },
										}}
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
	border: 1px solid black;
	padding: 0.5rem 1rem;
	flex: 1;
	margin: 0 0.25rem;
	position: relative;
`;

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

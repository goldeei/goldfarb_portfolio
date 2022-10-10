import { IoCaretBackOutline } from "react-icons/io5";
import styled from "styled-components";
import * as layout from "../styling/Layout";

export default function Controls({ onClick }) {
	return (
		<Container>
			<button className="next" onClick={() => onClick(1)}>
				<IoCaretBackOutline />
			</button>
			<button className="prev" onClick={() => onClick(-1)}>
				<IoCaretBackOutline />
			</button>
		</Container>
	);
}

const buttonOffset = "0.75rem";
const Container = styled.div`
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

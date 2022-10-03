import styled from "styled-components";
import * as layout from "../styling/Layout";

export const Wrapper = styled.div`
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	z-index: ${layout.zIndex("control")};
`;

export const Container = styled.div`
	width: ${layout.defMax};
	position: relative;
`;

export const Icon = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	width: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem;
	svg {
		padding: 0 0.1rem;
		border-radius: 0.2rem;
		background-color: ${(props) => props.theme.colors.primary};
		scale: 1.65;
	}
`;

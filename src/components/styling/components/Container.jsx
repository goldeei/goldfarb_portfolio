import styled, { css } from "styled-components";
import * as layout from "../Layout";

const Container = styled.div.attrs((props) => ({
	width: props.width || "max(500px, 50%)",
	height: props.height || "60%",
}))`
	${(props) => {
		const colors = props.theme.colors;
		return css`
			> h1 {
				color: ${colors.mainText};
				background-color: ${colors.primary};
				padding: 1rem;
				margin: 0;
				border-radius: 0.2rem;
				box-shadow: ${props.theme.containerDropShadow};
			}
		`;
	}}

	//TODO fullscreen broke
	${({ fullscreen }) => {
		if (fullscreen) {
			return css`
				width: 100%;
				height: 80%;
			`;
		} else {
			return css`
				width: ${(props) => props.width};
				height: ${(props) => props.height};
			`;
		}
	}}
	@media screen and (max-width: 500px) {
		width: ${({ fullscreen }) => (fullscreen ? "100%" : "max(500px, 50%)")};
		height: ${({ fullscreen }) => (fullscreen ? "95%" : "70%")};
		z-index: ${({ fullscreen }) =>
			fullscreen ? layout.zIndex("overlay") : layout.zIndex("content")};
	}

	position: relative;
	display: flex;
	flex-direction: column;
	align-self: center;
	transition-property: height, width;
	transition-duration: 0.25s;
	border-radius: 0.2rem;
`;

export default Container;

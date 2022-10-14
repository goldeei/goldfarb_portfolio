import styled, { css } from "styled-components";

const Container = styled.div.attrs((props) => ({
	width: props.width || "max(500px, 50%)",
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
	width: ${(props) => props.width};
	height: 80%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-self: center;
	transition-property: height, width;
	transition-duration: 0.25s;
	border-radius: 0.2rem;
`;

export default Container;

import styled, { css } from "styled-components";

const Container = styled.div.attrs((props) => ({
	width: props.width || "max(500px, 50%)",
	height: props.height || "80%",
}))`
	${(props) => {
		return css`
			max-width: ${props.width};
			height: ${props.height};
		`;
	}}
`;

export default Container;

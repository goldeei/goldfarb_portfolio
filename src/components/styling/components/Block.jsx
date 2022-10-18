import styled, { css } from "styled-components";
import { motion } from "framer-motion";

/**
 * @param fit true = fit-content, false = 100% parents
 */
export const Block = styled.div`
	padding: 1rem;
	display: flex;
	> h1 {
		align-self: center;
	}
	${(props) => {
		const colors = props.theme.colors;
		return css`
			width: ${props.fit ? "fit-content" : "100%"};
			background-color: ${colors.primary};
			colors: ${colors.mainText};
			box-shadow: ${props.theme.midShadow};
			border-radius: ${props.theme.defaultRadius};
		`;
	}}
`;

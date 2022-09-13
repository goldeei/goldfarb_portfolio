import styled, { css } from "styled-components";
import { motion } from "framer-motion";

function Banners({ children }) {
	return <Wrapper>{children}</Wrapper>;
}

export default Banners;

const defaults = css`
	padding: 0.75rem;
	width: fit-content;
	background-color: ${(props) => props.theme.backgroundColor.main};
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
	margin-bottom: 0.2rem;
`;

const Wrapper = styled.div`
	margin: 0 0.15rem;
	max-width: max(600px, 50%);
	> * {
		${defaults}
	}
	h1 {
		display: inline-block;
		position: relative;
		margin-top: 0;
		color: ${(props) => props.theme.colors.mainText};
	}
	h4 {
		margin-top: 0;
		color: ${(props) => props.theme.colors.subText};
	}
	p {
		margin: 0.6rem 0 0 0;
	}
`;

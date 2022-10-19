import styled, { css } from "styled-components";

/**
 * Creates and styles text tags as banners and wraps them in a parent
 * @param children
 * @returns Styled text banners
 */
function Banners({ children }) {
	return <Wrapper>{children}</Wrapper>;
}

export default Banners;

const defaults = css`
	padding: 0.75rem;
	width: fit-content;
	background-color: ${(props) => props.theme.colors.primary_09};
	box-shadow: ${(props) => props.theme.midShadow};
	margin-bottom: 0.2rem;
	border-radius: 0.2rem;
`;

const Wrapper = styled.div`
	padding: 0;
	max-width: max(630px, 50%);
	> * {
		${defaults}
	}
	h1 {
		position: relative;
		margin-top: 0;
	}
	h4 {
		margin-top: 0;
	}
	p {
		margin: 0.6rem 0 0 0;
	}
	span.highlight {
		color: ${(props) => props.theme.colors.highlightText};
		font-weight: bolder;
	}
`;

import styled from "styled-components";
import * as layout from "../styling/Layout";

function Controls({ ...props }) {
	const { children } = { ...props };
	return <ControlContainer>{children}</ControlContainer>;
}

const ControlContainer = styled.div`
	margin: 0 1rem;
	width: 100%;
	height: 100;
	z-index: ${layout.zIndex("site-controls")};
	display: flex;
	justify-content: right;
	> button {
		border-radius: 0.25rem;
		box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px 0px;
		z-index: 2;
	}
	> button:not(:last-child) {
		margin-right: 0.5rem;
	}
	> button > svg {
		padding: 0.25rem 0.3rem;
		scale: 1.95;
	}
	@media screen and (max-width: 500px) {
		justify-content: center;
		position: fixed;
		bottom: 1rem;
	}
`;

export default Controls;

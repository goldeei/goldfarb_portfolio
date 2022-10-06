import styled from "styled-components";
import * as layout from "../styling/Layout";

function Controls({ ...props }) {
	const { children } = { ...props };
	return <ControlContainer>{children}</ControlContainer>;
}

const ControlContainer = styled.div`
	position: fixed;
	bottom: 1rem;
	margin: 0 auto;
	width: ${layout.defMax};
	display: flex;
	justify-content: right;
	> button {
		border-radius: 0.25rem;
		box-shadow: ${(props) => props.theme.containerDropShadow};
	}
	> button:not(:last-child) {
		margin-right: 0.5rem;
	}
	> button > svg {
		padding: 0.25rem 0.3rem;
		scale: 1.95;
	}
`;

export default Controls;
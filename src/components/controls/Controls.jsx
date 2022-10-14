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
	display: flex;
	justify-content: right;
	> button:not(:last-child) {
		margin-right: 0.5rem;
	}
	@media screen and (max-width: 500px) {
		justify-content: center;
		position: fixed;
		bottom: 0.5rem;
		background-color: ${(props) => props.theme.colors.primary};
		width: 80%;
		padding: 0.5rem;
		border-radius: 0.25rem;
		box-shadow: ${(props) => props.theme.frontShadow};
	}
`;

export default Controls;

import { createGlobalStyle, css } from "styled-components";

const fullscreen = css`
	margin: 0;
	height: 100%;
	width: 100%;
`;

export const GlobalStyle = createGlobalStyle`
    section {
        position: relative;
        display: flex;
        ${fullscreen};
        &.vertical-center {
            align-items: center;
        };
        > div {
            height: fit-content;
        }
    };
`;

import { createGlobalStyle, css } from "styled-components";

const fullscreen = css`
	margin: 0;
	height: 100%;
	width: 100%;
`;

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif, KleeOne,
		Noto Sans JP;
        font-size: 20px;
        line-height: 24px;
        font-weight: 400;
        color: ${(props) => props.theme.colors.mainText};
        background-color: ${(props) => props.theme.colors.background};
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        scroll-behavior: smooth;
    }
    h1, p {
        color: ${(props) => props.theme.colors.mainText};
    }
    h2, h3, h4, h5 {
        color: ${(props) => props.theme.colors.subText};
    }
    section {
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        &.vertical-center {
            justify-content: center;
        };
    };
    //Colors
    * {
        color: ${(props) => props.theme.colors.mainText};
    }
    //Animations
    * {
        transition-property: background-color, color;
        transition-duration: 0.2s;
    }
    //Resets
    * {
        min-height: 0;
        min-width: 0;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import AtomDebugObserver from "./AtomDebugObserver";
import * as Layout from "./components/styling/Layout";
import { GlobalStyle } from "./components/styling/GlobalStyle";
import { Theme } from "./components/styling/Theme";
import { activeSectionState } from "./Atoms";
import Section from "./components/section/Section";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/about-me/AboutMe";
import WebDev from "./components/web-dev/WebDev";
import "./App.css";

const FillerCube = () => {
	const ref = useRef();
	useFrame(() => {
		ref.current.rotation.x += 0.01;
	});
	return (
		<mesh ref={ref} position={[3, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
			<boxGeometry />
			<meshStandardMaterial />
		</mesh>
	);
};

const Content = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	max-width: ${Layout.defMax};
`;

function App() {
	const [isDark, setDark] = useState(false);

	return (
		<ThemeProvider theme={isDark ? Theme.dark : Theme.light}>
			{/* <div id="r3f-container">
				<Canvas>
					<ambientLight intensity={0.1} />
					<directionalLight color="red" position={[10, 0, 15]} />
					<FillerCube />
				</Canvas>
			</div> */}
			<RecoilRoot>
				{/* <AtomDebugObserver /> */}
				<Content>
					<GlobalStyle />
					<Contact />
					<Navbar />
					<Section id="about-me" className="vertical-center">
						<AboutMe />
					</Section>
					<Section id="web-dev" className="vertical-center">
						<WebDev />
					</Section>
					<Section id="data-analytics">
						<p className="vertical-center">Data Analytics</p>
					</Section>
					<Section id="design">
						<p className="vertical-center">Design</p>
					</Section>
				</Content>
			</RecoilRoot>
		</ThemeProvider>
	);
}

export default App;

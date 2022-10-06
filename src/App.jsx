import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import AtomDebugObserver from "./AtomDebugObserver";
import * as Layout from "./components/styling/Layout";
import { GlobalStyle } from "./components/styling/GlobalStyle";
import { base, light, dark } from "./components/styling/Themes";
import { ThemeSwitcher } from "./components/buttons/Buttons";
import { activeSectionState } from "./Atoms";
import Controls from "./components/controls/Controls";
import Section from "./components/section/Section";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/about-me/AboutMe";
import WebDev from "./components/web-dev/WebDev";
import "./App.css";
import { createContext } from "react";

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

const themesMap = {
	light,
	dark,
};
export const ThemePreferenceContext = createContext();
function App() {
	const [isDark, setDark] = useState(false);
	const [currentTheme, setCurrentTheme] = useState("light");
	const theme = { ...base, colors: themesMap[currentTheme] };
	const changeTheme = () => {
		setDark(!isDark);
	};
	useEffect(() => {
		isDark ? setCurrentTheme("dark") : setCurrentTheme("light");
	}, [isDark]);
	return (
		<ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
			<ThemeProvider theme={theme}>
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
						<Controls>
							<Contact />
							<ThemeSwitcher onClick={() => changeTheme()} />
						</Controls>
					</Content>
				</RecoilRoot>
			</ThemeProvider>
		</ThemePreferenceContext.Provider>
	);
}

export default App;

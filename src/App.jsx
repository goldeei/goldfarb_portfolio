import { useEffect, useState, useRef, createContext } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import AtomDebugObserver from "./AtomDebugObserver";
import Scene from "./r3f/Scene";
import * as Layout from "./components/styling/Layout";
import { GlobalStyle } from "./components/styling/GlobalStyle";
import { base, light, dark } from "./components/styling/Themes";
import { ThemeSwitcher } from "./components/buttons/Buttons";
import { useLocalState } from "./hooks/useLocalState";
import Controls from "./components/controls/Controls";
import Section from "./components/section/Section";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/about-me/AboutMe";
import WebDev from "./components/web-dev/WebDev";
import "./App.css";

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
	//Possible themes
	const [currentTheme, setCurrentTheme] = useState("light");
	const theme = { ...base, colors: themesMap[currentTheme] };

	//Get/Set theme from local storage
	const [isDark, setDark] = useLocalState(false, "darkMode");
	useEffect(() => {
		isDark ? setCurrentTheme("dark") : setCurrentTheme("light");
	}, [isDark]);
	return (
		<ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
			<ThemeProvider theme={theme}>
				<Scene isDark={isDark} />
				<RecoilRoot>
					{/* <AtomDebugObserver /> */}
					<Content>
						<GlobalStyle />
						<Navbar>
							<Controls>
								<Contact />
								<ThemeSwitcher
									onClick={() => setDark(!isDark)}
									isDark={isDark}
								/>
							</Controls>
						</Navbar>
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
						{/* <Controls>
							<Contact />
							<ThemeSwitcher onClick={() => setDark(!isDark)} isDark={isDark} />
						</Controls> */}
					</Content>
				</RecoilRoot>
			</ThemeProvider>
		</ThemePreferenceContext.Provider>
	);
}

export default App;

import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import * as Layout from "./components/styling/Layout";
import { GlobalStyle } from "./components/styling/GlobalStyle";
import { Theme } from "./components/styling/Theme";
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
	let resizeTimer;
	//Stop animations on resize for width transitions
	// useEffect(() => {
	// 	window.addEventListener("resize", () => {
	// 		document.body.classList.add("halt-animation");
	// 		clearTimeout(resizeTimer);
	// 		resizeTimer = setTimeout(() => {
	// 			document.body.classList.remove("halt-animation");
	// 		}, 400);
	// 		return () => {
	// 			window.removeEventListener("resize", () => {
	// 				document.body.classList.add("halt-animation");
	// 				clearTimeout(resizeTimer);
	// 				resizeTimer = setTimeout(() => {
	// 					document.body.classList.remove("halt-animation");
	// 				}, 400);
	// 			});
	// 		};
	// 	});
	// });

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
				<Content>
					<GlobalStyle />
					<Contact />
					<Navbar />
					<section id="about-me" className="vertical-center">
						<AboutMe />
					</section>
					<section id="web-dev" className="vertical-center">
						<WebDev />
					</section>
					<section id="data-analytics">
						<p className="vertical-center">Data Analytics</p>
					</section>
					<section id="design">
						<p className="vertical-center">Design</p>
					</section>
				</Content>
			</RecoilRoot>
		</ThemeProvider>
	);
}

export default App;

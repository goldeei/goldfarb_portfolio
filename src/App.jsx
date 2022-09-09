import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import * as Layout from "./components/styling/Layout";
import { Theme } from "./components/styling/Theme";
import AboutMe from "./components/about-me/AboutMe";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Contact from "./components/contact/Contact";

const FillerCube = () => {
	const ref = useRef();
	useFrame(() => {
		ref.current.rotation.x += 0.01;
	});
	return (
		<mesh ref={ref} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
			<boxGeometry />
			<meshStandardMaterial />
		</mesh>
	);
};

const Content = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	${Layout.defMax};
`;

function App() {
	let resizeTimer;
	//Stop animations on resize for width transitions
	useEffect(() => {
		window.addEventListener("resize", () => {
			document.body.classList.add("halt-animation");
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				document.body.classList.remove("halt-animation");
			}, 400);
			return () => {
				window.removeEventListener("resize", () => {
					document.body.classList.add("halt-animation");
					clearTimeout(resizeTimer);
					resizeTimer = setTimeout(() => {
						document.body.classList.remove("halt-animation");
					}, 400);
				});
			};
		});
	});

	return (
		<ThemeProvider theme={Theme.light}>
			<div id="r3f-container">
				<Canvas>
					<ambientLight intensity={0.1} />
					<directionalLight color="red" position={[10, 0, 15]} />
					<FillerCube />
				</Canvas>
			</div>
			<RecoilRoot>
				<Content>
					<Contact />
					<Navbar />
					<section id="about-me">
						<AboutMe className={"vertical-center"} />
					</section>
					<section id="web-dev">
						<p className="vertical-center">Web Dev</p>
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

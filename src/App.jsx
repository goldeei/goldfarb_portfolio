import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RecoilRoot } from "recoil";
import { Mesh } from "three";

import Modal from "./components/modal/Modal";
import Section from "./components/Section";
import LandingPage from "./components/landing-page/LandingPage";
import Navbar from "./components/navbar/Navbar";
import NavButton from "./components/navbar/NavButton";
import "./App.css";
import { Contact } from "./components/contact/Contact";

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
		<>
			{/* <div id="r3f-container">
				<Canvas>
					<color attach="background" args={["white"]} />
					<ambientLight intensity={0.1} />
					<directionalLight color="red" position={[10, 0, 15]} />
					<FillerCube />
				</Canvas>
			</div> */}
			<RecoilRoot>
				<Contact />
				{/* <Navbar /> */}

				<Section
					className={"fullscreen"}
					key={"landing-page"}
					name={"landing-page"}
				>
					<LandingPage />
				</Section>

				<Section
					className={"fullscreen center-children"}
					key={"about-me"}
					name={"about-me"}
				>
					<p>ABOUT ME</p>
				</Section>
			</RecoilRoot>
		</>
	);
}

export default App;

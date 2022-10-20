import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, softShadows, Environment } from "@react-three/drei";

import Character from "./character/Character";
import Lighting from "./Lighting";

function Scene({ ...props }) {
	const { isDark } = { ...props };
	return (
		<div id="r3f-container">
			<Suspense fallback={null}>
				<Canvas shadows>
					<ambientLight intensity={0.1} />
					<Lighting isDark={isDark} />
					<Character />
					{/* <OrbitControls enableZoom={true} /> */}
				</Canvas>
			</Suspense>
		</div>
	);
}

export default Scene;

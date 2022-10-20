import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, softShadows, Environment } from "@react-three/drei";

import Character from "./character/Character";
import Lighting from "./Lighting";

function Scene({ ...props }) {
	const { themeColor } = { ...props };
	return (
		<div id="r3f-container">
			<Suspense fallback={null}>
				<Canvas shadows>
					<ambientLight intensity={0.1} />
					<Lighting themeColor={themeColor} />
					<Character />
					{/* <OrbitControls enableZoom={true} /> */}
				</Canvas>
			</Suspense>
		</div>
	);
}

export default Scene;

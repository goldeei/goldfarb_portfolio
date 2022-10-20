import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, softShadows, Environment } from "@react-three/drei";

import Character from "./character/Character";
import Lighting from "./Lighting";

function Scene() {
	return (
		<div id="r3f-container">
			<Suspense fallback={null}>
				<Canvas shadows>
					<ambientLight intensity={0.1} />
					<Lighting />
					<Character />
					<OrbitControls enableZoom={true} />
					{/* <ContactShadows
                        opacity={1}
                        scale={10}
                        blur={1}
                        far={10}
                        resolution={256}
                        color="#000000"
                    /> */}
				</Canvas>
			</Suspense>
		</div>
	);
}

export default Scene;

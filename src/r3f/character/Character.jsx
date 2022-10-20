import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { Grass, Bottom, Guy } from "./Models";

function Character() {
	const main = useRef(!null);
	useFrame((state, delta) => {
		main.current.position.y +=
			Math.sin(state.clock.getElapsedTime() * 1) * 0.002;
		main.current.rotation.x =
			Math.sin(state.clock.getElapsedTime() * 1) * 0.005;
		main.current.rotation.y =
			Math.sin(state.clock.getElapsedTime() * 1) * 0.005;
	});

	return (
		<group ref={main} scale={0.9} position={[2.5, 0, 0]}>
			<Bottom dimensions={[1.15, 1]} scale={4.5} position={[0.1, -1.25, 0]} />
			<Grass dimensions={[1.32, 0.9]} scale={4} position={[0.05, 0, 0.1]} />
			<Guy scale={1.75} dimensions={[1, 1.2]} position={[0, 1.1, 0.125]} />
		</group>
	);
}

export default Character;

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

/**
 * @param scale
 * @param position
 * @param dimensions
 * @param img - returns a texture
 * @returns Plane with .png texture, transparent alphas
 */

// const DepthStandardMaterial = new T();

function PlaneAlphaTexture({ ...props }) {
	const { scale, position, dimensions, img, color } = { ...props };
	const ref = useRef(!null);
	const texture = useLoader(THREE.TextureLoader, img);
	useEffect(() => {
		ref.current.customDepthMaterial = new THREE.MeshDepthMaterial({
			map: texture,
			depthPacking: THREE.RGBADepthPacking,
			alphaTest: 0.1,
		});
	});
	return (
		<mesh ref={ref} scale={scale} position={position} castShadow receiveShadow>
			<planeBufferGeometry attach="geometry" args={dimensions} />
			<meshStandardMaterial
				attach="material"
				map={texture}
				transparent={true}
				side={THREE.DoubleSide}
				alphaTest={0.1}
				color={color}
			/>
		</mesh>
	);
}

export default PlaneAlphaTexture;

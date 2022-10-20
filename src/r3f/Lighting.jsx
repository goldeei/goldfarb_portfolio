import { useRef } from "react";
import { useTheme } from "styled-components";
import { useHelper, SpotLight } from "@react-three/drei";
import { DirectionalLightHelper, SpotLightHelper } from "three";

const shadowProps = {
	shadowMapSizeHeight: 1024,
	shadowMapSizeWidth: 1024,
	shadowBias: -0.0002,
};

const Hemisphere = () => {
	return (
		<hemisphereLight
			intensity={0.5}
			color={0xf48037}
			groundColor={0x87ceeb}
			position={[2.5, 10, 6]}
		/>
	);
};

const Sun = ({ ...props }) => {
	const { color } = { ...props };
	const sun = useRef(!null);

	return (
		<SpotLight
			ref={sun}
			castShadow
			color={`${color}`}
			intensity={7.5}
			distance={14}
			position={[2.5, 10, 6]}
			angle={0.5}
			shadow-mapSize-height={shadowProps.shadowMapSizeHeight}
			shadow-mapSize-width={shadowProps.shadowMapSizeWidth}
			shadow-bias={shadowProps.shadowBias}
			shadow-camera-near={1}
			shadow-camera-far={10}
			shadow-camera-left={-5}
			shadow-camera-right={5}
			shadow-camera-top={10}
			shadow-camera-bottom={-10}
		/>
	);
};

function Lighting({ ...props }) {
	const { themeColor } = { ...props };
	console.log(themeColor);
	return (
		<>
			{/* <Hemisphere /> */}
			<ambientLight intensity={0.3} />
			<Sun color={themeColor} />
		</>
	);
}

export default Lighting;

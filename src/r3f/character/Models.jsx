import { Suspense } from "react";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

import PlaneAlphaTexture from "../PlaneAlphaTexture";

import grass from "../../assets/textures/Grass.png";
import bottom from "../../assets/textures/Bottom.png";
import guy from "../../assets/textures/Character.png";

export const Grass = ({ ...props }) => {
	return <PlaneAlphaTexture {...props} img={grass} />;
};
export const Bottom = ({ ...props }) => {
	return <PlaneAlphaTexture {...props} img={bottom} />;
};
export const Guy = ({ ...props }) => {
	return <PlaneAlphaTexture {...props} img={guy} />;
};

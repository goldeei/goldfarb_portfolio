import { atom } from "recoil";

//Returns current hash if it exists, else return default
const activeDefault = () =>
	location.hash ? location.hash.replace("#", "") : "about-me";
export const activeSectionState = atom({
	key: "activeSection",
	default: activeDefault(),
});

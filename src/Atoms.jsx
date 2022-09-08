import { atom } from "recoil";

export const activeSectionState = atom({
	key: "activeSection",
	default: "about-me",
});

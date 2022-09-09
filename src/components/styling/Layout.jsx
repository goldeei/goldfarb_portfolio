//Sets default max width
export const defMax = "min(95vw, 1200px)";

//Returns z-index depending on element's purpose
export const zIndex = (level) => {
	if (level === "background") return "-1";
	if (level === "content") return "1";
	if (level === "control") return "2";
	if (level === "overlay") return "3";
	return "0";
};

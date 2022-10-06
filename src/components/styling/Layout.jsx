//TODO Move/refactor to GlobalStyling

//Default max width
export const defMax = "min(95vw, 1200px)";

/**
 * @param level the related z-index string
 * * "background" = -1
 * * "content" = 1
 * * "control" = 2
 * * "overlay" = 3
 * * null = 0
 * @returns the associated z-index
 */
export const zIndex = (level) => {
	if (level === "background") return "-1";
	if (level === "content") return "1";
	if (level === "control") return "2";
	if (level === "navbar") return "3";
	if (level === "overlay") return "4";
	return "0";
};

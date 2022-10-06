import { useState, useEffect } from "react";

export function useLocalState(defaultValue, key) {
	const [value, setValue] = useState(() => {
		const value = window.localStorage.getItem("darkMode");
		return value !== null ? JSON.parse(value) : defaultValue;
	});

	useEffect(() => {
		window.localStorage.setItem(key, value);
	}, [key, value]);
	//console.log(value);
	return [value, setValue];
}

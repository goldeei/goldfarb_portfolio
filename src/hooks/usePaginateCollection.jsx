import { useState } from "react";
import { wrap } from "@popmotion/popcorn";

export default function usePaginateCollection(array) {
	const [[item, dir], setIndex] = useState([0, 0]);
	const paginate = (newDir) => {
		setIndex([item + newDir, newDir]);
	};
	const handleNav = (i) => {
		let dir;
		i < item ? (dir = -1) : (dir = 1);
		setIndex([i, dir]);
	};
	const index = wrap(0, array.length, item);

	return [index, dir, paginate, handleNav];
}

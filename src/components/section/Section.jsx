import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSetRecoilState } from "recoil";

import { activeSectionState } from "../../Atoms";

/**
 * Defines content sections, controls active and navbar state on scroll
 */
function Section({ ...props }) {
	const { id, className, children } = { ...props };
	const setActive = useSetRecoilState(activeSectionState);

	const { ref, entry } = useInView({
		threshold: 0.75,
	});

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (entry?.isIntersecting === true) {
				setActive(entry.target.id);
			}
		}, 100);
		return () => {
			clearTimeout(timeout);
		};
	});

	return (
		<section id={id} ref={ref} className={className}>
			{children}
		</section>
	);
}

export default Section;

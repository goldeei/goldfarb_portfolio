import React, { ReactNode, useEffect } from "react";
import { useInView, InView } from "react-intersection-observer";
import { useSetRecoilState } from "recoil";
import { activeSectionState } from "../Atoms";
import LandingPage from "./landing-page/LandingPage";

export default function Section({
	children,
	className,
	name,
}) {
	const setActiveSection = useSetRecoilState(activeSectionState);

	useEffect(() => {
		// React.Children.forEach(children, child => {
		//     console.log(child.type)
		// })
	});

	//const landingPage = children?.find(({type}) => type === LandingPage)

	// const { ref } = useInView({
	//     threshold: 0.75,
	//     onChange: (inView) => {
	//         if(inView) return setActiveSection(name)
	//     }
	// })

	return (
		<section className={className}>
			<InView
				as="div"
				threshold={0}
				onChange={(inView) => {
					if (inView) return setActiveSection(name);
				}}
			>
				{children}
			</InView>
		</section>
	);
}

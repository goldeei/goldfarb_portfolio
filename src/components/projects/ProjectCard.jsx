import { motion } from "framer-motion";

function ProjectCard({ ...props }) {
	const { title, img } = { ...props };
	console.log(title, img);
	return (
		<div>
			<img alt={title} src={img} />
			<h3>{title}</h3>
		</div>
	);
}

export default ProjectCard;

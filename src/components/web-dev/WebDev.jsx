import { useState } from "react";

import ProjectContainer from "../projects/Container";
import inv from "../../assets/images/TicketDetails.png";
import tickets from "../../assets/images/Inventory_d.png";
import cute from "../../assets/images/CutePlaceholder.png";
import { projects } from "./projects";

const title = "Web Development";
const collection = [
	{
		label: "Tickets",
		imgSrc: inv,
	},
	{
		label: "Inventory",
		imgSrc: tickets,
	},
	{
		label: "Another",
		imgSrc: cute,
	},
];

function WebDev() {
	return (
		<ProjectContainer
			title={title}
			collection={collection}
			projects={projects}
		/>
	);
}

export default WebDev;

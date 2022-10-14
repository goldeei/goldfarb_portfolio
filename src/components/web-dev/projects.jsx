//Originals
import classview_original from "../../assets/images/dashboard_update/original/Classrooms.png";
import classview_original_dark from "../../assets/images/dashboard_update/original/Classrooms_d.png";

//Update
import classview_update from "../../assets/images/dashboard_update/update/Classrooms_u.png";
import classview_update_dark from "../../assets/images/dashboard_update/update/Classrooms_u_d.png";

export const projects = [
	{
		projectTitle: "Dashboard",
		summary:
			"A mobile first, in-production, UI overhaul of a department's internal dashboard.",

		details: [
			{
				title: "Classview",
				description:
					"Hub showing the status of all the rooms. Quickly shows online/offline status, whether or not the room is in use, and if there are active issues.",
				images: [
					{
						title: "Classview Original",
						src: classview_original,
						type: "light",
					},
					{
						title: "Classview Original - Dark",
						src: classview_original_dark,
						type: "dark",
					},
					{
						title: "Classview Updated",
						src: classview_update,
						type: "light",
					},
					{
						title: "Classview Updated - Dark",
						src: classview_update_dark,
						type: "dark",
					},
				],
			},
		],
	},
];

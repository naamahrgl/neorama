export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "Home",
		link: "/",
	},
	{
		text: "The Project",
		link: "/Project/",
	},
	{
		text: "Specifications",
		link: "/specifications",
	},
		{
		text: "Living",
		link: "/living",
	},
		{
		text: "Pricing",
		link: "/#pricing",
	},
		{
		text: "About Us",
		link: "/about",
	},

];

export default navConfig;

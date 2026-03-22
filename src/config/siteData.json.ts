export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Neorama",
	// Your website's title and description (meta fields)
	title: "The way life should be lived",
	description:
		"Experience the quality of village life in Northern Greece with a vibrant international community just outside Thessaloniki",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Neorama",
		email: "info@neorama.org",
		twitter: "",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		colors: {
			primary: "#00040f",
			secondary: "#00f6ff",
			white: "rgba(255,255,255,0.7)",
			blue: "rgba(9, 151, 124,0.1)",
		},
		fontFamily: {
			Poppins: ["san-serif", "poppins"],
			roboto: ["Roboto", "sans-serif"],
		},
		screens: {
			xs: "480px",
			ss: "670px",
			sm: "768px",
			md: "1060px",
			lg: "1200px",
			xl: "1700px",
		},
	},
	plugins: [],
};

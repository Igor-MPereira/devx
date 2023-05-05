/** @type {import("prettier").Config} */
const config = {
	plugins: [require.resolve("prettier-plugin-tailwindcss")],
	arrowParens: "avoid",
	printWidth: 90,
	trailingComma: "none",
	useTabs: true,
	tabWidth: 2
};

module.exports = config;

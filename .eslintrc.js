module.exports = {
	extends: [
		"plugin:react-redux/recommended",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/recommended",
	],
	ignorePatterns: ["node_modules"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "typescript-sort-keys", "import"],
	root: true,
	rules: {
		"@typescript-eslint/explicit-function-return-type": "warn",
		"sort-keys": [
			"warn",
			"asc",
			{
				caseSensitive: true,
				minKeys: 2,
				natural: false,
			},
		],
		"import/order": "error",
		"import/newline-after-import": "error",
		"typescript-sort-keys/interface": [
			"warn",
			"asc",
			{ caseSensitive: true, natural: false, requiredFirst: false },
		],
	},
};

/* eslint-disable no-unused-vars */
module.exports = viewGenerator => {
	return {
		description: "Create a view",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is your view name?",
			},
		],
		actions: function(data) {
			var actions = [];
			actions.push({
				type: "add",
				path: "src/components/_shared/{{pascalCase name}}/index.tsx",
				templateFile: "plop-templates/Component.js.hbs",
			});
			return actions;
		},
	};
};

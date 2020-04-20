/* eslint-disable no-unused-vars */
module.exports = componentGenerator => {
	return {
		description: "Create a component",
		// User input prompts provided as arguments to the template
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is your component name?",
			},
			{
				type: "input",
				name: "custom",
				message: "route?",
			},
			{
				type: "confirm",
				name: "shared",
				message: "Is a _shared component?",
			},
		],
		actions: function(data) {
			var actions = [];
			if (data.custom.length < 2) {
				if (data.shared) {
					actions.push({
						type: "add",
						path: "src/components/_shared/{{pascalCase name}}/index.tsx",
						templateFile: "plop-templates/Component.js.hbs",
					});
					actions.push({
						type: "add",
						path: "src/components/_shared/{{pascalCase name}}/types.ts",
						templateFile: "plop-templates/Types.js.hbs",
					});
					actions.push({
						type: "add",
						path: "src/components/_shared/{{pascalCase name}}/styles.scss",
						templateFile: "plop-templates/Styles.js.hbs",
					});
				} else {
					actions.push({
						type: "add",
						path: "src/components/{{pascalCase name}}/index.tsx",
						templateFile: "plop-templates/Component.js.hbs",
					});
					actions.push({
						type: "add",
						path: "src/components/{{pascalCase name}}/types.ts",
						templateFile: "plop-templates/Types.js.hbs",
					});
					actions.push({
						type: "add",
						path: "src/components/{{pascalCase name}}/styles.scss",
						templateFile: "plop-templates/Styles.js.hbs",
					});
				}
			} else {
				actions.push({
					type: "add",
					path: "src/{{pascalCase custom}}/index.tsx",
					templateFile: "plop-templates/Component.js.hbs",
				});
				actions.push({
					type: "add",
					path: "src/{{pascalCase custom}}/types.ts",
					templateFile: "plop-templates/Types.js.hbs",
				});
				actions.push({
					type: "add",
					path: "src/{{pascalCase custom}}/styles.scss",
					templateFile: "plop-templates/Styles.js.hbs",
				});
			}
			return actions;
		},
	};
};

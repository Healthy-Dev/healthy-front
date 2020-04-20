/* eslint-disable no-unused-vars */
module.exports = utilGenerator => {
	return {
		description: "Create a util",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is your util name?",
			},
		],
		actions: function(data) {
			var actions = [];
			actions.push({
				type: "add",
				path: "src/components/utils/{{pascalCase name}}.tsx",
				templateFile: "plop-templates/Util.js.hbs",
			});
			return actions;
		},
	};
};

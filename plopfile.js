const componentGenerator = require("./plop-templates/generator/component");
const viewGenerator = require("./plop-templates/generator/view");
const utilGenerator = require("./plop-templates/generator/util");
const containerGenerator = require("./plop-templates/generator/container");

module.exports = plop => {
	plop.setGenerator("component", componentGenerator());
	plop.setGenerator("view", viewGenerator());
	plop.setGenerator("util", utilGenerator());
	plop.setGenerator("container", containerGenerator());
};

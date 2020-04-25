import React from "react";
import Logo from "assets/img/logo.svg";

import "./index.scss";
import Button from "components/_shared/Button";

function MyComponent() {
	return (
		<div className="MyComponent">
			<header className="MyComponent-header">
				<img src={Logo} className="MyComponent-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
        {/*Default: */}
				<Button className="MyComponent-buttons"> Button</Button>
        {/*Disabled: */}
				<Button className="MyComponent-buttons" disabled={true}>
					Button
				</Button>
        {/*Outlined variant: */}
				<Button className="MyComponent-buttons" outlined={true}>
					Button
				</Button>
        {/*error: */}
				<Button className="MyComponent-buttons" error={true}>
					Button
				</Button>
        {/*succes: */}
				<Button className="MyComponent-buttons" succes={true}>
					Button
				</Button>
				<a
					className="MyComponent-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default MyComponent;

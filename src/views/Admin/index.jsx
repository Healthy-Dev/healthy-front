import React from "react";

import Button from "components/_shared/Button";
import MyComponent from "components/Admin/MyComponent";

const AdminView = () => {
	return (
		<>
        <MyComponent/>
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
		</>
	);
};

export default AdminView;

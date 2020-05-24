import React, { useEffect } from "react";

import Button from "components/_shared/Button";
import MyComponent from "components/Admin/MyComponent";

// Redux
import { useDispatch } from "react-redux";
import { requestDummy } from "state/dummy/actions";

const AdminView = () => {
	const d = useDispatch();

	useEffect(() => {
		d(requestDummy());
	}, [d]);
	return (
		<>
			<MyComponent />
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

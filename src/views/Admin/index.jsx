import React, { useEffect } from "react";

import Button from "components/_shared/Button";
import MyComponent from "components/Admin/MyComponent";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestDummy } from "state/dummy/actions";
// selectores:
import { DummySelector } from "state/dummy/selectors";

const AdminView = () => {
	const d = useDispatch();
	const { data, loading, error } = useSelector((state) => DummySelector(state));

	useEffect(() => {
		d(requestDummy({ mensaje: "alo polisia" }));
	}, [d]);

	useEffect(() => {
		if (error) console.log("ups, la cagamos con algo");
		if (loading) console.log("estamos esperando que termine la request :D");
		if (!loading) console.log("ya no estamos esperando (?)");
		if (data) console.log("desde backend me llego esto:", data);
	}, [data, loading, error]);

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

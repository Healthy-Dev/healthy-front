import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { UserSelector } from "state/user/selectors";
import { getUserRequest } from "state/user/actions";
import { useRef } from "react";

import EditCardForm from "components/EditCard/EditCardForm";

const EditProfile = () => {
	const token =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1pa2UiLCJpYXQiOjE2MDAwNDIwMDUsImV4cCI6MTYwMDEyODQwNX0.5C9-gH8V-vr8LSYfjhoX5bSdFJMn_5w-jR11BcSWrjQ";
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector((state) => UserSelector(state));

	useEffect(() => {
		dispatch(getUserRequest({ token }));
	}, []);

	//save imagen and showing
	

	function sendForm(data) {
		console.log(data);
	}

	return (
		<div className="editProfile">
			{data && <EditCardForm sendForm={sendForm} dataUser={data} /> }
		</div>
	);
};

export default EditProfile;

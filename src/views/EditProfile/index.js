import React, { useEffect } from "react";
import "./index.scss";

import { useDispatch, useSelector } from "react-redux";
import { UserSelector } from "state/user/selectors";
import { getUserRequest, updateUserRequest } from "state/user/actions";

import EditProfileForm from "components/EditProfile/Form";
import Loading from "components/_shared/Loading";

const EditProfile = ({ history }) => {
	const token = "Bearer ";
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector((state) => UserSelector(state));

	useEffect(() => {
		dispatch(getUserRequest({ token }));
	}, [dispatch]); //eslin-disable-line

	function sendForm(data) {
		console.log(data)
		dispatch(updateUserRequest({ token, data }));
		setTimeout(() => {
			if(!error) history.replace("/profile");
		}, 3000);
	}

	return (
		<div className="editProfile">
			{loading && <Loading />}
			{data && <EditProfileForm sendForm={sendForm} dataUser={data} />}
		</div>
	);
};

export default EditProfile;

import React, { useEffect } from "react";
import "./index.scss";

import { useDispatch, useSelector } from "react-redux";
import { UserSelector } from "state/user/selectors";
import { getUserRequest, updateUserRequest } from "state/user/actions";

import EditProfileForm from "components/EditProfile/Form";
import Loading from "components/_shared/Loading";

const EditProfile = ({ history }) => {
	const token = "";
	const dispatch = useDispatch();
	const { data, loading } = useSelector((state) => UserSelector(state));

	useEffect(() => {
		dispatch(getUserRequest({ token }));
	}, [dispatch]); //eslin-disable-line

	function sendForm(data) {
		dispatch(updateUserRequest({ token, data }));
		history.goBack();
	}

	return (
		<div className="editProfile">
			{loading && <Loading />}
			{data && <EditProfileForm sendForm={sendForm} dataUser={data} />}
		</div>
	);
};

export default EditProfile;

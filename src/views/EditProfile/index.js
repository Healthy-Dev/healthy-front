import React, { useEffect } from "react";
import "./index.scss";
import useAuth from "hooks/useAuth";

import { useDispatch, useSelector } from "react-redux";
import { UserSelector, UpdateUserSelector } from "state/user/selectors";
import { getUserRequest, updateUserRequest } from "state/user/actions";

import EditProfileForm from "components/EditProfile/Form";
import Loading from "components/_shared/Loading";
import Alert from "components/_shared/Alert";

const EditProfile = ({ history }) => {
	const { token } = useAuth();
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector((state) => UserSelector(state));
	const {
		data: updateUserData,
		loading: updateUserLoading,
		error: updateUserError,
	} = useSelector((state) => UpdateUserSelector(state));

	useEffect(() => {
		dispatch(getUserRequest({ token }));
	}, [dispatch]); //eslint-disable-line

	function sendEditProfile(data) {
		dispatch(updateUserRequest({ token, data }));
		setTimeout(() => {
			if (!error) history.replace("/profile");
		}, 2000);
	}

	console.log(updateUserData, updateUserLoading, updateUserError);

	return (
		<div className="editProfile">
			{loading && <Loading />}
			{updateUserData && <Alert success>{updateUserData.message}</Alert>}
			{data && (
				<EditProfileForm
					loading={updateUserLoading}
					dataUser={data}
					sendForm={sendEditProfile}
				/>
			)}
		</div>
	);
};

export default EditProfile;

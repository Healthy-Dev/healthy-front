import React, { useContext } from "react";
import useAuth from "hooks/useAuth";

import { useDispatch, useSelector } from "react-redux";
import { UserSelector } from "state/user/selectors";
import { updateUserRequest } from "state/user/actions";

import EditProfileForm from "components/EditProfile/Form";
import Loading from "components/_shared/Loading";
import TopNavbar from "components/_shared/TopNavbar";

import { ContextModal } from "hooks/useModal";

const EditProfile = () => {
	const { hiddenModal } = useContext(ContextModal);
	const { token } = useAuth();
	const dispatch = useDispatch();
	const { data, loading } = useSelector((state) => UserSelector(state));
	function sendEditProfile(data) {
		dispatch(updateUserRequest({ token, data }));
		setTimeout(() => hiddenModal(), 2000);
	}

	return (
		<>
			<TopNavbar title="Editar Perfil" />
			<div className="editProfile">
				{loading && <Loading />}
				{data && <EditProfileForm dataUser={data} sendForm={sendEditProfile} />}
			</div>
		</>
	);
};

export default EditProfile;

import React, { useContext } from "react";
import useAuth from "hooks/useAuth";

import { useDispatch, useSelector } from "react-redux";
import { UserSelector, UpdateUserSelector } from "state/user/selectors";
import { updateUserRequest } from "state/user/actions";

import EditProfileForm from "components/EditProfile/Form";
import TopNavbar from "components/_shared/TopNavbar";

import { ContextModal } from "hooks/useModal";
import Loading from "components/_shared/Loading";

const EditProfile = () => {
	const { hiddenModal } = useContext(ContextModal);
	const { token } = useAuth();
	const dispatch = useDispatch();
	const { data, loading } = useSelector((state) => UserSelector(state));

	const { loading: updateLoading } = useSelector((state) => UpdateUserSelector(state));

	function sendEditProfile(data) {
		dispatch(updateUserRequest({ token, data }));
		setTimeout(() => hiddenModal(), 2000);
	}

	return (
		<>
			<TopNavbar title="Editar Perfil" />
			<div className="editProfile">
				{loading && <Loading />}
				{data && (
					<EditProfileForm
						dataUser={data}
						sendForm={sendEditProfile}
						loading={updateLoading}
					/>
				)}
			</div>
		</>
	);
};

export default EditProfile;

import React, { useEffect, useContext } from "react";
import useAuth from "hooks/useAuth";

import { useDispatch, useSelector } from "react-redux";
import { UserSelector, UpdateUserSelector } from "state/user/selectors";
import { getUserRequest, updateUserRequest } from "state/user/actions";

import EditProfileForm from "components/EditProfile/Form";
import Loading from "components/_shared/Loading";
import Alert from "components/_shared/Alert";
import TopNavbar from "components/_shared/TopNavbar";

import { ContextModal } from "hooks/useModal";

const EditProfile = () => {
	const { hiddenModal } = useContext(ContextModal);
	const { token } = useAuth();
	const dispatch = useDispatch();
	const { data, loading } = useSelector((state) => UserSelector(state));
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
		setTimeout(() => hiddenModal(), 2000);
	}

	return (
		<>
			<TopNavbar title="Editar Perfil" />
			<div className="editProfile">
				{updateUserData && <Alert success>{updateUserData.message}</Alert>}
				{updateUserError && <Alert error>No se pudo actualizar tus datos</Alert>}
				{loading && <Loading />}
				{data && (
					<EditProfileForm
						loading={updateUserLoading}
						dataUser={data}
						sendForm={sendEditProfile}
					/>
				)}
			</div>
		</>
	);
};

export default EditProfile;

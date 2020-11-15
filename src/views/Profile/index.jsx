import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

import Layout from "components/_shared/Layout";
import Alert from "components/_shared/Alert";
import Loader from "components/_shared/Loader";
import HeaderProfile from "components/Profile/Header";
import List from "components/Profile/List";

// Redux
import { requestCardsByUserCreator, requestGetCards } from "state/cards/actions";
import {
	getUserRequest,
	deleteUserData,
	hiddenMsgUser,
	deleteUserRequest,
} from "state/user/actions";
import { userLogout } from "state/auth/actions";
// Selectores
import {
	FilterByUserCreator,
	GetCardsSelector,
	GetCardsLikesByMe,
} from "state/cards/selectors";
import {
	UserSelector,
	MessageUserSelector,
	DeleteUserSelector,
	UpdateUserSelector,
} from "state/user/selectors";

import useAuth from "hooks/useAuth";
import { ContextModal } from "hooks/useModal";

const Profile = ({ history }) => {
	const { showComponent, showModal } = useContext(ContextModal);
	const { token, closeSession, isAuth } = useAuth();

	const dispatch = useDispatch();
	const { data: dataCards, loading } = useSelector((state) => GetCardsSelector(state));
	const { data: dataUser, error: errorUser } = useSelector((state) =>
		UserSelector(state),
	);
	const { error: errorDeleteUser } = useSelector((state) => DeleteUserSelector(state));
	const { error: errorUpdateUser } = useSelector((state) => UpdateUserSelector(state));
	const { data: messageAlert } = useSelector((state) => MessageUserSelector(state));

	const { data: dataFilterCards } = useSelector((state) => FilterByUserCreator(state));

	const { data: getCardsLikesByMe } = useSelector((state) => GetCardsLikesByMe(state));

	function deleteDataUser() {
		dispatch(userLogout());
		dispatch(deleteUserData());
		closeSession();
	}

	function hiddenAlert() {
		dispatch(hiddenMsgUser());
	}

	useEffect(() => {
		if (!isAuth) history.replace("/login");
	}, [isAuth]); //eslint-disable-line

	const [cardsLikesByMe, setLCardsLikesByMe] = useState([]);

	useEffect(() => {
		if (dataCards && dataUser) {
			setLCardsLikesByMe(() => getCardsLikesByMe(dataUser.user.id));
		}
	}, [dataCards, dataUser]); //eslint-disable-line

	useEffect(() => {
		if (!dataCards) dispatch(requestGetCards());
		if (!dataUser) dispatch(getUserRequest({ token }));
	}, [dispatch]); //eslint-disable-line

	useEffect(() => {
		if (dataUser?.user && !dataFilterCards && !dataFilterCards?.length) {
			dispatch(requestCardsByUserCreator({ creatorId: dataUser?.user.id }));
		}
	}, [dataUser, dataFilterCards, dispatch]);

	function editProfile() {
		showModal();
		showComponent("edit-profile");
	}

	function deleteUser() {
		// NOTE: Confirmar el origen del token
		dispatch(deleteUserRequest({ token }));
	}

	let optionsModal = [
		{ title: "Editar perfil", fn: editProfile },
		{ title: "Eliminar Cuenta", fn: deleteUser },
		{ title: "Cerrar Sesion", fn: deleteDataUser },
	];

	return (
		<Layout title="Perfil">
			{messageAlert && (
				<Alert
					click={hiddenAlert}
					error={errorUser || errorDeleteUser || errorUpdateUser}
					showButtonClose
					success={!errorUser && !errorDeleteUser && !errorUpdateUser}
				>
					{messageAlert}
				</Alert>
			)}
			<div className="profile">
				<section>
					<HeaderProfile
						dataUser={dataUser}
						dataFilterCards={dataFilterCards}
						optionsModal={optionsModal}
					/>

					{loading && <Loader center />}
					{cardsLikesByMe?.length > 0 && (
						<List cards={cardsLikesByMe} title="Guardadas" />
					)}
				</section>

				<div className="content">
					{loading && <Loader center />}
					{dataFilterCards && <List cards={dataFilterCards} title="Creadas" />}
				</div>
			</div>
		</Layout>
	);
};

export default Profile;

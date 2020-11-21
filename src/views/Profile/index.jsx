import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

import { ReactComponent as CreateIcon } from "assets/icons/create.svg";
import { ReactComponent as BookMarkIcon } from "assets/icons/bookmark.svg";

import Layout from "components/_shared/Layout";
import Alert from "components/_shared/Alert";
import Loader from "components/_shared/Loader";
import HeaderProfile from "components/Profile/Header";
import List from "components/Profile/List";

// Redux
import { requestCardsByUserCreator } from "state/cards/actions";
import {
	getUserRequest,
	deleteUserData,
	hiddenMsgUser,
	deleteUserRequest,
} from "state/user/actions";
import { userLogout } from "state/auth/actions";
// Selectores
import { FilterByUserCreator } from "state/cards/selectors";
import {
	UserSelector,
	MessageUserSelector,
	DeleteUserSelector,
	UpdateUserSelector,
} from "state/user/selectors";

import useAuth from "hooks/useAuth";
import { ContextModal } from "hooks/useModal";
import { ILikeContext } from "state/cardsILike";
// import { filterCardsByUserCreator } from "state/cards/services";

const Profile = ({ history }) => {
	const { cardsILike, loading } = useContext(ILikeContext);
	const { showComponent, showModal } = useContext(ContextModal);
	const { token, closeSession, isAuth } = useAuth();

	const dispatch = useDispatch();
	const { data: dataUser, error: errorUser } = useSelector((state) =>
		UserSelector(state),
	);
	const { data: cardsByCreator, loading: loadingCreator } = useSelector((state) =>
		FilterByUserCreator(state),
	);

	const { error: errorDeleteUser } = useSelector((state) => DeleteUserSelector(state));
	const { error: errorUpdateUser } = useSelector((state) => UpdateUserSelector(state));

	const { data: messageAlert } = useSelector((state) => MessageUserSelector(state));

	useEffect(() => {
		if (!isAuth) history.replace("/login");
	}, [isAuth]); //eslint-disable-line

	useEffect(() => {
		if (!dataUser) dispatch(getUserRequest({ token }));
	}, [dispatch]); //eslint-disable-line

	useEffect(() => {
		if (dataUser?.user && !cardsByCreator && !cardsByCreator?.length) {
			dispatch(requestCardsByUserCreator({ creatorId: dataUser?.user.id }));
		}
	}, [dataUser, cardsByCreator, dispatch]);

	function deleteDataUser() {
		dispatch(userLogout());
		dispatch(deleteUserData());
		closeSession();
		setTimeout(() => {
			history.replace("/login");
		}, 2000);
	}

	function hiddenAlert() {
		dispatch(hiddenMsgUser());
	}

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
						dataFilterCards={cardsByCreator?.length}
						cardsILike={cardsILike?.length}
						optionsModal={optionsModal}
					/>

					{cardsILike.length > 0 && (
						<List cards={cardsILike} title="Guardadas" icon={BookMarkIcon} />
					)}
					{loading && <Loader center className="profile__loader" />}
				</section>

				<div className="profile__content">
					{cardsByCreator && (
						<List cards={cardsByCreator} title="Creadas" icon={CreateIcon} />
					)}
					{loadingCreator && <Loader center className="profile__loader" />}
				</div>
			</div>
		</Layout>
	);
};

export default Profile;

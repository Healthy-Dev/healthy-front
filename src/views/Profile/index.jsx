import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

import Layout from "components/_shared/Layout";
import Alert from "components/_shared/Alert";
import ListCards from "components/_shared/ListCards";
import Loader from "components/_shared/Loader";
import HeaderProfile from "components/Profile/Header";

// Redux
import { requestCardsByUserCreator, requestGetCards } from "state/cards/actions";
import { getUserRequest, deleteUserData, hiddenMsgUser } from "state/user/actions";
import { userLogout } from "state/auth/actions";
// Selectores
import { FilterByUserCreator, GetCardsSelector } from "state/cards/selectors";
import { UserSelector, MessageUserSelector } from "state/user/selectors";

import useAuth from "hooks/useAuth";
import { ContextModal } from "hooks/useModal";

const Profile = ({ history }) => {
	const { showComponent, showModal } = useContext(ContextModal);
	const { token, closeSession, isAuth } = useAuth();

	const dispatch = useDispatch();
	const { data: dataCards } = useSelector((state) => GetCardsSelector(state));
	const { data: dataUser, error: errorUser } = useSelector((state) =>
		UserSelector(state),
	);
	const { data: messageAlert } = useSelector((state) => MessageUserSelector(state));

	const { data: dataFilterCards, loading } = useSelector((state) =>
		FilterByUserCreator(state),
	);

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

	useEffect(() => {
		if (!dataCards) dispatch(requestGetCards());
		if (!dataUser) dispatch(getUserRequest({ token }));
	}, [dispatch]); //eslint-disable-line

	useEffect(() => {
		if (dataUser && dataUser.user && !dataFilterCards) {
			dispatch(requestCardsByUserCreator({ creatorId: dataUser?.user.id }));
		}
	}, [dataUser, dataFilterCards, dispatch]);

	function editProfile() {
		showModal();
		showComponent("edit-profile");
	}

	function deleteUser() {
		console.log("delete User");
	}

	let optionsModal = [
		{ title: "Editar perfil", fn: editProfile },
		{ title: "Cerrar Sesion", fn: deleteDataUser },
		{ title: "Eliminar Cuenta", fn: deleteUser },
	];

	return (
		<Layout title="Perfil">
			{messageAlert && (
				<Alert click={hiddenAlert} error={errorUser} showButtonClose success={!errorUser}>
					{messageAlert}
				</Alert>
			)}
			<div className="profile">
				<HeaderProfile
					dataUser={dataUser}
					dataFilterCards={dataFilterCards}
					optionsModal={optionsModal}
				/>
				<section>
					<h2 className="subtitle">
						{!dataFilterCards?.length && "Aun no creaste ninguna Tarjeta"}
					</h2>
					{loading && <Loader center />}
					{dataFilterCards && <ListCards cards={dataFilterCards} />}
				</section>
			</div>
		</Layout>
	);
};

export default Profile;

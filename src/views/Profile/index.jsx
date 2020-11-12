import React, { useContext, useEffect } from "react";
import "./index.scss";

import Layout from "components/_shared/Layout";
import CardsUser from "components/Profile/Carrousel";
import Loading from "components/_shared/Loading";
import MoreOptions from "components/_shared/MoreOptions";

import { ReactComponent as TwitterIcon } from "assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/instagram.svg";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestCardsByUserCreator, requestGetCards } from "state/cards/actions";
import { getUserRequest, deleteUserData, hiddenMsgUser } from "state/user/actions";
import { userLogout } from "state/auth/actions";
// Selectores
import { FilterByUserCreator, GetCardsSelector } from "state/cards/selectors";
import { UserSelector, MessageUserSelector } from "state/user/selectors";
import useAuth from "hooks/useAuth";
import { ContextModal } from "hooks/useModal";
import Alert from "components/_shared/Alert";

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
		if (isAuth) history.replace("/login");
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

	let optionsModal = [
		{ title: "Editar perfil", fn: editProfile },
		{ title: "Cerrar Sesion", fn: deleteDataUser },
	];

	return (
		<Layout title="Perfil">
			{messageAlert && (
				<Alert click={hiddenAlert} error={errorUser} showButtonClose success={!errorUser}>
					{messageAlert}
				</Alert>
			)}
			<div className="profile">
				<div className="profile__header">
					<div className="profile__header--img">
						<img
							src={
								(dataUser && dataUser.user.profilePhoto) ||
								"https://www.component-creator.com/images/testimonials/defaultuser.png"
							}
							alt="profile"
						/>
					</div>
					<section className="profile__header--user">
						<h2>{dataUser?.user.name}</h2>
						<h3>@{dataUser?.user.username}</h3>
						<section className="social">
							<p>
								<span>{dataFilterCards?.length}</span> Tarjetas
							</p>
							/
							{(dataUser?.user.instagram || dataUser?.user.twitter) && (
								<>
									<a href={dataUser?.user.instagram} target="_blank noopener noreferrer">
										<InstagramIcon />
									</a>
									<a href={dataUser?.user.twitter} target="_blank noopener noreferrer">
										<TwitterIcon />
									</a>
								</>
							)}
						</section>
					</section>
					<MoreOptions optionsModal={optionsModal} />
				</div>
				{loading && <Loading />}
				<section>
					<h2 className="subtitle">
						{!dataFilterCards?.length ? "Aun no creaste ninguna Tarjeta" : "Mis Tarjetas"}
					</h2>
					{dataFilterCards && <CardsUser data={dataFilterCards} />}
				</section>
			</div>
		</Layout>
	);
};

export default Profile;

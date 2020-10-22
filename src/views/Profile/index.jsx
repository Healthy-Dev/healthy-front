import React, { useEffect } from "react";
import "./index.scss";

import Layout from "components/_shared/Layout";
import CardsUser from "components/Profile/Carrousel";
import Loading from "components/_shared/Loading";
import MoreOptions from "components/_shared/MoreOptions";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestCardsByUserCreator, requestGetCards } from "state/cards/actions";
import { getUserRequest } from "state/user/actions";
import { userLogout } from "state/auth/actions";
// Selectores
import { FilterByUserCreator, GetCardsSelector } from "state/cards/selectors";
import { UserSelector } from "state/user/selectors";
import useAuth from "hooks/useAuth";
import {} from "state/cards/services";

const Profile = ({ history }) => {
	const { token, closeSession } = useAuth();

	const deleteDataUser = () => {
		dispatch(userLogout());
		closeSession();
	};

	const dispatch = useDispatch();
	const { data: dataCards, loading: loadingCards } = useSelector((state) =>
		GetCardsSelector(state),
	);
	const { data: dataUser } = useSelector((state) => UserSelector(state));

	const { data: dataFilterCards } = useSelector((state) => FilterByUserCreator(state));

	useEffect(() => {
		if (!dataCards) dispatch(requestGetCards());
		if (!dataUser) dispatch(getUserRequest({ token }));
	}, [dispatch, token]); //eslint-disable-line

	useEffect(() => {
		if (dataUser && dataUser.user && !dataFilterCards) {
			dispatch(requestCardsByUserCreator({ creatorId: dataUser?.user.id }));
		}
	}, [dataUser, dataFilterCards, dispatch]);

	let optionsModal = [
		{ title: "Editar perfil", fn: () => history.push("/edit-profile") },
		{ title: "Cerrar Sesion", fn: () => deleteDataUser() },
	];

	return (
		<Layout title="Perfil">
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
					<h2>{dataUser && dataUser.user.name}</h2>
					<MoreOptions optionsModal={optionsModal} />
				</div>
				{loadingCards && <Loading />}
				{dataFilterCards && <CardsUser data={dataCards} />}
			</div>
		</Layout>
	);
};

export default Profile;

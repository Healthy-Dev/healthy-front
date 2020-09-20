import React, { useEffect } from "react";
import "./index.scss";

import Carrousel from "components/Profile/Carrousel";
import NavBar from "components/Home/NavBar";
import Loading from "components/_shared/Loading";
import MoreOptions from "components/_shared/MoreOptions";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestHome } from "state/home/actions";
import { getUserRequest } from "state/user/actions";
// Selectores
import { HomeSelector } from "state/home/selectors";
import { UserSelector } from "state/user/selectors";

const Profile = ({ history }) => {
	const token = "Bearer ";

	const dispatch = useDispatch();
	const { data: dataCards, loading: loadingCards } = useSelector((state) => HomeSelector(state));
	const { data: dataUser }= useSelector((state) => UserSelector(state));

	useEffect(() => {
		dispatch(requestHome());
		dispatch(getUserRequest({ token }));
	}, [dispatch]);

	let optionsModal = [
		{ title: "Editar perfil", fn: () => history.push("/edit-profile") },
		// TODO: [Crear funcionalidad para cerrar sesion]
		{ title: "Cerrar Sesion", fn: () => console.log("Cerrar Sesion") },
	]

	return (
		<>
			<div className="profile">
				<div className="profile__header">
					<div className="profile__header--img">
						<img src={(dataUser && dataUser.user.profilePhoto) || "https://www.component-creator.com/images/testimonials/defaultuser.png"}alt="profile" />
					</div>
					<h2>{dataUser && dataUser.user.name}</h2>
					<MoreOptions optionsModal={optionsModal} />
				</div>
				{loadingCards && <Loading />}
				{dataCards && (
					// TODO: [Crear funcionalidad para filtrar datos por categoria y enviar]
					<>
						<Carrousel data={dataCards} />
						<Carrousel data={dataCards} />
						<Carrousel data={dataCards} />
						<Carrousel data={dataCards} />
					</>
				)}
			</div>
			<NavBar />
		</>
	);
};

export default Profile;

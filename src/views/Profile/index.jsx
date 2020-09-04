import React, { useEffect } from "react";
import "./index.scss";

import Carrousel from "components/Profile/Carrousel";
import NavBar from "components/Home/NavBar";
import Loading from "components/_shared/Loading";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestHome } from "state/home/actions";
// Selectores
import { HomeSelector } from "state/home/selectors";
import MoreOptions from "components/_shared/MoreOptions";

const Profile = ({ history }) => {
	const dispatch = useDispatch();
	const { data, loading } = useSelector((state) => HomeSelector(state));

	useEffect(() => {
		dispatch(requestHome());
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
						<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile" />
					</div>
					<h2>Joel Done</h2>
					<MoreOptions optionsModal={optionsModal} />
				</div>
				{loading && <Loading />}
				{data && (
					// TODO: [Crear funcionalidad para filtrar datos por categoria y enviar]
					<>
						<Carrousel data={data} />
						<Carrousel data={data} />
						<Carrousel data={data} />
						<Carrousel data={data} />
					</>
				)}
			</div>
			<NavBar />
		</>
	);
};

export default Profile;

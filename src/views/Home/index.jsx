import React, { useEffect } from "react";
import Card from 'components/_shared/Card'
import NavHome from "components/Home/Nav-Home";
import NavBar from "../../components/_shared/NavBar/index";
import "./index.scss";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestHome } from "state/home/actions";
// Selectores
import { HomeSelector } from "state/home/selectors";
import Loading from "components/_shared/Loading";

const HomeView = () => {
	const d = useDispatch();
	const { data, loading, error } = useSelector((state) => HomeSelector(state));

	useEffect(() => {
		d(requestHome());
	}, [d]);

	return (
		<>
			{loading && Loading}
			<NavHome />
			<main className="container-home">
				{data && data.map(({ photo, title, id }) => (
					<Card img={photo} title={title} key={id} id={id} />
				))}
			</main>
			<NavBar />
		</>
	);
}

export default HomeView;

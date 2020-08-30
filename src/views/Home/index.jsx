import React, { useEffect } from "react";
import Card from "../../components/Home/Card/index";
import NavHome from "components/Home/Nav-Home";
import NavBar from "../../components/Home/NavBar/index";
import "./index.scss";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestHome } from "state/home/actions";
// Selectores
import { HomeSelector } from "state/home/selectors";

const HomeView = () => {
	const d = useDispatch();
	const { data, loading, error } = useSelector((state) => HomeSelector(state));

	useEffect(() => {
		d(requestHome());
	}, [d]);

	return (
		<main className="container-home">
			{<NavHome />}
			{data &&
				data.map(({ photo, title, id }) => <Card img={photo} title={title} key={id} id={id} />)
			}
			<NavBar />
		</main>
	);
}

export default HomeView;

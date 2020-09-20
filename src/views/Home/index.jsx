import React, { useEffect } from "react";
import Card from 'components/_shared/Card'
import NavHome from "components/Home/Nav-Home";
import NavBar from "../../components/_shared/NavBar/index";
import Loading from "components/_shared/Loading";
import Button from "components/Home/Button";
import "./index.scss";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestHome } from "state/home/actions";
// Selectores
import { HomeSelector } from "state/home/selectors";

const HomeView = () => {
	const dispatch = useDispatch();
	const { data, loading } = useSelector((state) => HomeSelector(state));

	useEffect(() => {
		dispatch(requestHome());
	}, [dispatch]);

	return (
		<>
			<NavHome />
			{loading && <Loading />}
			<main className="container-home">
				{data && data.map(({ photo, title, id }) => (
					<Card img={photo} title={title} key={id} id={id} />
				))}
				<Button />
			</main>
			<NavBar />
		</>
	);
}

export default HomeView;

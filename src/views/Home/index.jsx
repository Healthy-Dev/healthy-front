import React, { useEffect } from "react";
import Card from "components/_shared/Card";
import NavHome from "components/Home/Nav-Home";
import NavBar from "../../components/_shared/NavBar/index";
import Loading from "components/_shared/Loading";
import Button from "components/Home/Button";
import "./index.scss";
import useAuth from "hooks/useAuth";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestHome } from "state/home/actions";
// Selectores
import { HomeSelector } from "state/home/selectors";

const HomeView = ({ history }) => {
	const dispatch = useDispatch();
	const { isAuth } = useAuth();
	const { data, loading } = useSelector((state) => HomeSelector(state));

	useEffect(() => {
		dispatch(requestHome());
		if (!isAuth) history.replace("/login");
	}, [dispatch]); //eslint-disable-line

	return (
		<>
			<NavHome />
			{loading && <Loading />}
			<main className="container-home">
				{data &&
					data.map(({ photo, title, id }) => (
						<Card img={photo} title={title} key={id} id={id} />
					))}
				<Button />
			</main>
			<NavBar />
		</>
	);
};

export default HomeView;

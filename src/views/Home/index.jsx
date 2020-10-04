import React, { useEffect } from "react";
import Card from "components/_shared/Card";
import NavHome from "components/Home/Nav-Home";
import NavBar from "../../components/_shared/NavBar/index";
import Loading from "components/_shared/Loading";
import Button from "components/Home/Button";
import Onboarding from "views/Onboarding";
import "./index.scss";
import useAuth from "hooks/useAuth";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestGetCards } from "state/cards/actions";
// Selectores
import { GetCardsSelector } from "state/cards/selectors";

const HomeView = () => {
	const dispatch = useDispatch();
	const { isAuth } = useAuth();
	const { data, loading } = useSelector((state) => GetCardsSelector(state));

	useEffect(() => {
		if (!data) dispatch(requestGetCards());
	}, [dispatch]); //eslint-disable-line

	return (
		<>
			{!isAuth ? (
				<Onboarding />
			) : (
				<>
					<NavHome />
					{loading && <Loading />}
					{data && (
						<main className="container-home">
							{data.map(({ photo, title, id }) => (
								<Card img={photo} title={title} key={id} id={id} />
							))}
						</main>
					)}
					<Button />
					<NavBar />
				</>
			)}
		</>
	);
};

export default HomeView;

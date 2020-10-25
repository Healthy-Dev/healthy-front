import React, { useEffect } from "react";
import "./index.scss";
import Imagen from "assets/img/card-home.jpg";

import Card from "components/_shared/Card";
import Loading from "components/_shared/Loading";
import Onboarding from "views/Onboarding";
import Layout from "components/_shared/Layout";
import IconPlus from "components/ButtonAdd";

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
				<Layout title="inicio" logo>
					{loading ? (
						<Loading />
					) : (
						<>
							<div className="presentation">
								<img src={Imagen} alt="presentation" />
								<h2>Solo diviertete!</h2>
							</div>
							<div className="content">
								{data &&
									data.map(({ photo, title, id }) => (
										<Card img={photo} title={title} key={id} id={id} />
									))}
							</div>
						</>
					)}
				</Layout>
			)}
			<IconPlus />
		</>
	);
};

export default HomeView;

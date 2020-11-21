import React, { useEffect } from "react";
import "./index.scss";
import Imagen from "assets/img/card-home.jpg";

import Onboarding from "views/Onboarding";
import Layout from "components/_shared/Layout";
import IconPlus from "components/ButtonAdd";
import NavHome from "components/_shared/Logo";
import Alert from "components/_shared/Alert";
import ListCards from "components/_shared/ListCards";
import Loader from "components/_shared/Loader";

import { useDispatch, useSelector } from "react-redux";
import { requestGetCards, hiddenMsgAlert } from "state/cards/actions";
import { GetCardsSelector, hiddenMesgSelector } from "state/cards/selectors";

import useAuth from "hooks/useAuth";

const HomeView = () => {
	const dispatch = useDispatch();
	const { isAuth } = useAuth();
	const { data, loading } = useSelector((state) => GetCardsSelector(state));
	const { data: msg, error: errorMsg } = useSelector((state) =>
		hiddenMesgSelector(state),
	);

	useEffect(() => {
		if (!data) dispatch(requestGetCards());
	}, [dispatch, data]); //eslint-disable-line

	function deleteMsg() {
		dispatch(hiddenMsgAlert());
	}

	return (
		<>
			{!isAuth ? (
				<Onboarding />
			) : (
				<Layout title="inicio" logo>
					{msg && (
						<Alert click={deleteMsg} error={errorMsg} success={!errorMsg} showButtonClose>
							{msg}
						</Alert>
					)}

					<div className="presentation">
						<img src={Imagen} alt="presentation" />
						<h2>Solo diviertete!</h2>
					</div>

					<div className="line"></div>

					<div className="logo-home">
						<NavHome />
					</div>

					<div className="home">
						{loading && <Loader center />}
						{data && <ListCards cards={data} />}
					</div>
					<IconPlus />
				</Layout>
			)}
		</>
	);
};

export default HomeView;

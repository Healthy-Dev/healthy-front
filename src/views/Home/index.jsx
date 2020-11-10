import React, { useEffect } from "react";
import "./index.scss";
import Imagen from "assets/img/card-home.jpg";

import Card from "components/_shared/Card";
import Loading from "components/_shared/Loading";
import Onboarding from "views/Onboarding";
import Layout from "components/_shared/Layout";
import IconPlus from "components/ButtonAdd";
import NavHome from "components/_shared/Logo";

import useAuth from "hooks/useAuth";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestGetCards, hiddenMsgAlert } from "state/cards/actions";
// Selectores
import { GetCardsSelector, hiddenMesgSelector } from "state/cards/selectors";
import Alert from "components/_shared/Alert";

const HomeView = () => {
	const dispatch = useDispatch();
	const { isAuth } = useAuth();
	const { data, loading } = useSelector((state) => GetCardsSelector(state));
	const { data: msg, error: errorMsg } = useSelector((state) =>
		hiddenMesgSelector(state),
	);

	useEffect(() => {
		if (!data) dispatch(requestGetCards());
	}, [dispatch, data, msg]); //eslint-disable-line

	function deleteMsg() {
		dispatch(hiddenMsgAlert());
	}

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
							{msg && (
								<Alert
									click={deleteMsg}
									error={errorMsg}
									success={!errorMsg}
									showButtonClose
								>
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

							<div className="content">
								{data &&
									data.map(({ photo, title, id, likesCount }) => (
										<Card
											img={photo}
											title={title}
											key={id}
											id={id}
											likesCount={likesCount}
										/>
									))}
							</div>
						</>
					)}
					<IconPlus />
				</Layout>
			)}
		</>
	);
};

export default HomeView;

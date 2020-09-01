import React, { useEffect } from "react";
import Card from "components/_shared/Card";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { requestDetails } from "state/cardDetails/actions";
import { CardDetailsSelector } from "state/cardDetails/selectors";

const CardDetailsView = () => {
	const d = useDispatch();
	const { data, loading, error } = useSelector((state) => CardDetailsSelector(state));
	const { cardId } = useParams();

	useEffect(() => {
		d(requestDetails({ url: `v1/cards/${cardId}` }));
	}, [d, cardId]);

	return (
		<div className="card__detail">
			{error && <p>No se encontro lo que busacas...</p>}
			{loading && <p>loading...</p>}
			{data && <Card data={data} />}
		</div>
	);
};

export default CardDetailsView;

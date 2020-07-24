import React, { useEffect } from "react";

import Card from "components/CardDetails/Card";
//Router
import { useParams } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { requestDetails } from "state/cardDetails/actions";
//Selector
import { CardDetailsSelector } from "state/cardDetails/selectors";

const CardDetailsView = () => {
	const d = useDispatch();
	const { data } = useSelector((state) => CardDetailsSelector(state));
	const { cardId } = useParams();

	useEffect(() => {
		d(requestDetails({ url: `v1/cards/${cardId}` }));
	}, [d, cardId]);

	return <Card data={data} />;
};

export default CardDetailsView;

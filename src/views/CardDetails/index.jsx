import React, { useEffect } from "react";

import Card from "../../components/CardDetails/Card";

//Router
import { useParams } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { requestDetails } from "state/cardDetails/actions";

//Selector
import { CardDetailsSelector } from "state/cardDetails/selectors";

const CardDetailsView = () => {
	const d = useDispatch();
	const { data, loading, error } = useSelector((state) => CardDetailsSelector(state));
	const { cardId } = useParams();

	useEffect(() => {
		d(requestDetails({ url: `v1/cards/${cardId}` }));
	}, [d]);
	console.log(data);
	useEffect(() => {
		if (error) console.log("ups, la cagamos con algo");
		if (loading) console.log("estamos esperando que termine la request :D");
		if (!loading) console.log("ya no estamos esperando (?)");
		if (data) console.log("desde backend me llego esto:", data);
	}, [data, loading, error]);

	return <Card data={data} />;
};

export default CardDetailsView;

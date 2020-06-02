import React, { useEffect } from 'react';

import Card from '../../components/CardDetails/Card';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { requestDetails } from "state/cardDetails/actions";

//Selector
import { CardDetailsSelector } from "state/cardDetails/selectors";

const CardDetails = () => {

    const d = useDispatch();
    const { data, loading, error } = useSelector((state) => CardDetailsSelector(state));
    
	useEffect(() => {
		d(requestDetails({url: "api/products3"}));
	}, [d]);

	useEffect(() => {
		if (error) console.log("ups, la cagamos con algo");
		if (loading) console.log("estamos esperando que termine la request :D");
		if (!loading) console.log("ya no estamos esperando (?)");
		if (data) console.log("desde backend me llego esto:", data);
    }, [data, loading, error]);
    
    return (
        <Card data={data} loading={loading} />
    );
};

export default CardDetails;
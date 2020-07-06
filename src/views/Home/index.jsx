import React, { useEffect } from 'react';
import Card from '../../components/Home/Card/index';
import CreateCardButton from '../../components/Home/Button/index'
import NavBar from '../../components/Home/NavBar/index';
import './index.scss'
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestHome } from "state/home/actions";
// Selectores
import { HomeSelector } from "state/home/selectors";


const HomeView = () => {
    const d = useDispatch();
    const { data, loading, error } = useSelector((state) => HomeSelector(state));

    useEffect(() => {
        d(requestHome());
    }, [d]);

    useEffect(() => {
        if (error) console.log("ups, la cagamos con algo");
        if (loading) console.log("estamos esperando que termine la request :D");
        if (!loading) console.log("ya no estamos esperando (?)");
        if (data) console.log("desde backend me llego esto:", data);
    }, [data, loading, error]);

    return (
        <main className="container-home">
            <NavBar />
            {data &&
                data.map(({ photo, title, id }) => <Card img={photo} title={title} key={id} />)
            }
            <CreateCardButton />
        </main>
    );
}

export default HomeView;
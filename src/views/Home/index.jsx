import React, { useEffect } from 'react';
import Card from '../../components/Home/Card/index';
import CreateCardButton from '../../components/Home/Button/index'
import NavBar from '../../components/Home/NavBar/index';

const HomeView = () => {
    useEffect(() => {

    }, [])
    return (
        <>
            <NavBar />
            <Card />
            <CreateCardButton />
        </>
    );
}

export default HomeView;
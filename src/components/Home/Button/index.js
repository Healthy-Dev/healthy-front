import React from 'react';
import './index.scss'
import plusIcon from 'assets/icons/plus.svg';
import { Link } from 'react-router-dom';

const CreateCardButton = () => {
    return (
        <Link to="/createCard">
            <button className="home-button">
                <img src={plusIcon} alt="icon plus" />
            </button>
        </Link>
    );
}

export default CreateCardButton;
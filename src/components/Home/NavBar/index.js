import React from 'components/Home/node_modules/react';
import './index.scss';
import homeheart from '../../../assets/icons/home-heart.svg';
import heartbeat from '../../../assets/icons/heart-beat.svg';
import salad from '../../../assets/icons/salad.svg';
import usericon from '../../../assets/icons/user.svg';

const NavBar = () => {
    return (
        <nav className="nav-bar-container">
            <span className="nav-bar-icons">{homeheart}</span>
            <span className="nav-bar-icons">{salad}</span>
            <span className="nav-bar-icons">{heartbeat}</span>
            <span className="nav-bar-icons">{usericon}</span>
        </nav>
    );
}

export default NavBar; 
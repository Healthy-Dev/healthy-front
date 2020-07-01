import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeHeart } from '../../../assets/icons/home-heart.svg';
import { ReactComponent as HeartBeat } from '../../../assets/icons/heart-beat.svg';
import { ReactComponent as Salad } from '../../../assets/icons/salad.svg';
import { ReactComponent as UserIcon } from '../../../assets/icons/user.svg';

const NavBar = () => {
    return (
        <nav className="nav-bar-container">
            <button className="nav-bar-button">
                <Link to="/">
                    <HomeHeart className="nav-bar-icons" />
                </Link>
            </button>
            <button className="nav-bar-button">
                <Salad className="nav-bar-icons" />
            </button>
            <button className="nav-bar-button">
                <HeartBeat className="nav-bar-icons" />
            </button>
            <button className="nav-bar-button">
                <UserIcon className="nav-bar-icons" />
            </button>
        </nav>
    );
}

export default NavBar; 
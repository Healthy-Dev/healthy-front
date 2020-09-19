import React from 'react';
import './index.scss';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as HomeHeart } from '../../../assets/icons/home.svg';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';
import { ReactComponent as UserIcon } from '../../../assets/icons/user.svg';

const NavBar = () => {

    const location = useLocation();

    let isLocation = location.pathname;


    return (
        <nav className="nav-bar-container">
            <button className="nav-bar-button">
                <Link to="/">
                    <HomeHeart className={`nav-bar-icons ${isLocation === '/' && "fill-yellow"}`} />
                </Link>
            </button>
            <button className="nav-bar-button">
                <Link to="/search">
                    <Search className={`nav-bar-icons ${isLocation === '/search' && "fill-yellow"}`} />
                </Link>
            </button>
            <button className="nav-bar-button">
                <Link to="/user">
                    <UserIcon className={`nav-bar-icons ${isLocation === '/profile' && "fill-yellow"}`} />
                </Link>
            </button>
        </nav>
    );
}

export default NavBar; 
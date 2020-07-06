import React from 'react';
import './index.scss';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as HomeHeart } from '../../../assets/icons/home-heart.svg';
import { ReactComponent as HeartBeat } from '../../../assets/icons/heart-beat.svg';
import { ReactComponent as Salad } from '../../../assets/icons/salad.svg';
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
                <Link>
                    <Salad className={`nav-bar-icons ${isLocation === '/salad' && "fill-yellow"}`} />
                </Link>
            </button>
            <button className="nav-bar-button">
                <Link>
                    <HeartBeat className={`nav-bar-icons ${isLocation === '/heartbeat' && "fill-yellow"}`} />
                </Link>
            </button>
            <button className="nav-bar-button">
                <Link>
                    <UserIcon className={`nav-bar-icons ${isLocation === '/user' && "fill-yellow"}`} />
                </Link>
            </button>
        </nav>
    );
}

export default NavBar; 
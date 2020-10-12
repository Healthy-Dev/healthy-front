import React from "react";
import "./index.scss";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as HomeHeart } from "assets/icons/home.svg";
import { ReactComponent as Search } from "assets/icons/search.svg";
import { ReactComponent as UserIcon } from "assets/icons/user.svg";
import { ReactComponent as LogoIcon } from "assets/icons/logo-simple.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";

const NavBar = () => {
	const location = useLocation();

	let isLocation = location.pathname;

	const links = [
		{ id: 0, path: "/", class: "nav-bar-icons", icon: HomeHeart },
		{ id: 1, path: "/search", class: "nav-bar-icons", icon: Search },
		{ id: 2, path: "/new", class: "home-button", icon: PlusIcon },
		{ id: 3, path: "/profile", class: "nav-bar-icons", icon: UserIcon },
	];

	const Icons = ({ Icon, ...arg }) => <Icon {...arg} />;

	return (
		<nav className="navbar">
			{links.map((link) => (
				<button className="nav-bar-button" key={link.id}>
					<Link to={link.path}>
						<Icons
							Icon={link.icon}
							className={`${link.class} ${isLocation === link.path && "fill-yellow"}`}
						/>
					</Link>
				</button>
			))}
			<LogoIcon className="logo-simple nav-bar-button nav-bar-icons" />
		</nav>
	);
};

export default NavBar;

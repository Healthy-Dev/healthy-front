import React from "react";
import "./index.scss";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as HomeHeart } from "assets/icons/home.svg";
import { ReactComponent as Search } from "assets/icons/search.svg";
import { ReactComponent as UserIcon } from "assets/icons/user.svg";

const NavBar = ({ onClick }) => {
	const location = useLocation();

	let isLocation = location.pathname;

	const links = [
		{ id: 0, path: "/", class: "nav-bar-icons", icon: HomeHeart },
		{ id: 1, path: "/search", class: "nav-bar-icons", icon: Search },
		{ id: 3, path: "/profile", class: "nav-bar-icons", icon: UserIcon },
	];

	const Icons = ({ Icon, ...arg }) => <Icon {...arg} />;

	return (
		<nav className="navbar" onClick={onClick}>
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
		</nav>
	);
};

export default NavBar;

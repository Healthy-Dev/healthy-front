import React from "react";
import "./index.scss";

import { ReactComponent as TwitterIcon } from "assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/instagram.svg";
import MoreOptions from "components/_shared/MoreOptions";

const HeaderProfile = ({ dataUser, dataFilterCards, optionsModal }) => {
	return (
		<div className="profile__header">
			<div className="profile__header--img">
				<img
					src={
						(dataUser && dataUser.user.profilePhoto) ||
						"https://www.component-creator.com/images/testimonials/defaultuser.png"
					}
					alt="profile"
				/>
			</div>
			<section className="profile__header--user">
				<h2>{dataUser?.user.name}</h2>
				<h3>@{dataUser?.user.username}</h3>
				<section className="social">
					<p>
						<span>{dataFilterCards?.length}</span> Tarjetas
					</p>
					/
					{(dataUser?.user.instagram || dataUser?.user.twitter) && (
						<>
							<a href={dataUser?.user.instagram} target="_blank noopener noreferrer">
								<InstagramIcon />
							</a>
							<a href={dataUser?.user.twitter} target="_blank noopener noreferrer">
								<TwitterIcon />
							</a>
						</>
					)}
				</section>
			</section>
			<MoreOptions optionsModal={optionsModal} />
		</div>
	);
};

export default HeaderProfile;

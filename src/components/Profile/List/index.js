import React from "react";
import "./index.scss";
import ListCards from "components/_shared/ListCards";

const List = ({ cards, title, icon: Icon }) => (
	<section className="profile__cards">
		<h2 className="profile__cards--title">
			{!cards?.length ? (
				`No tienes tarjetas ${title}`
			) : (
				<>
					<Icon />
					<span>Tarjetas {title}</span>
				</>
			)}
		</h2>
		<ListCards cards={cards} />
	</section>
);

export default List;

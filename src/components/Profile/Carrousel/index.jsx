import React from "react";
import "./index.scss";
import Card from "components/_shared/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrousel = ({ data }) => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 360,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="carrousel">
			<h4>Categoria</h4>
			<Slider {...settings} className="carrousel__scroll">
				{data.map(({ photo, title, id }) => (
					<Card img={photo} title={title} key={id} id={id} />
				))}
			</Slider>
		</div>
	);
};

export default Carrousel;

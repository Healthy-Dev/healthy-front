import React from "react";
import "./index.scss";
import { ReactComponent as LikesHeart } from "assets/icons/likes-heart.svg";

const Card = ({ img, title, id }) => {
    return (
        <div id={id} className="card__container">
            <div className="card__likes">
                <button className="card__likes-button">
                    <LikesHeart className="card__likes-heart" />
                </button>
                <p>1.3k</p>
            </div>
            <img className="card__img" src={img} alt={title} />
            <div className="card__details">
                <h2>{title}</h2>
            </div>
        </div>
    );
}

export default Card;

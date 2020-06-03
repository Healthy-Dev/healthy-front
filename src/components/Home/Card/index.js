import React from 'react';
import './index.scss';
import imgHome from './../../../assets/img/card-home.jpg';
import { ReactComponent as MoreVert} from './../../../assets/icons/more-vert.svg';
import { ReactComponent as LikesHeart } from './../../../assets/icons/likes-heart.svg';

const Card = () => {
    return (
        <div className ="card__container">
            <div className="card__likes">
                <LikesHeart className="card__likes-heart"/>
                <span>100 Likes</span>
            </div>
            <img className="card__img" src={imgHome} />
            <div className="card__details">
            <h2>Rutinas de running para la mañana</h2>
            <MoreVert className="card__more-vert"/>
            </div>
        </div>
    );
}

export default Card;
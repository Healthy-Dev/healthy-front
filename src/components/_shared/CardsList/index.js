import React from "react";
import CardThumbnail from "../CardThumbnail";
import "./index.scss";
import Loader from '../Loader'

const CardsList = ({ cards, userId, loading = false }) => {
  if (loading) {
    return <Loader center />
  }

  return (
    <div className="list-cards">
      {cards?.map((card) => (
        <CardThumbnail
          key={card.id}
          img={card.photo}
          title={card.title}
          id={card.id}
          creator={card.creator}
          likesCount={card.likesCount}
          isILiked={userId && card.likesBy.some((like) => like.id === userId)}
        />
      ))}
    </div>
  );
};

export default CardsList;

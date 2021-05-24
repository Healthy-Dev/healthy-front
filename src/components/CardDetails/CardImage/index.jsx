import React, { useContext } from "react";
import "./index.scss";

import { ILikeContext } from "state/cardsILike";
import Likes from "../../_shared/Likes";

const CardImage = ({
  id,
  photo,
  title,
  likesCount,
  isILiked,
  iLiked,
  disLiked,
  category,
}) => {
  const { deleteCardILike, setCardILike } = useContext(ILikeContext);

  return (
    <section className="card__header">
      <figure className="card__header--img">
        <img src={photo} alt={title} />
      </figure>
      <div className="card__header--more">
        <Likes
          readOnly={false}
          viewCountInMobile={true}
          likesCount={likesCount}
          isILiked={isILiked}
          iLiked={iLiked}
          disLiked={disLiked}
          deleteCardILike={() => deleteCardILike(id)}
          setCardILike={() => setCardILike(id)}
        />
      </div>
      <section className="card__header--title">
        <span className="card__btn">{category}</span>
        <h1 className="card__title">{title}</h1>
      </section>
    </section>
  );
};
export default CardImage;

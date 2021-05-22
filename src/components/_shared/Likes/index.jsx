import React from "react";
import "./index.scss";
import { ReactComponent as LikesIcon } from "assets/icons/heart.svg";
import { useAnimation } from "./useAnimation";

const Likes = ({ 
  isILiked,
  likesCount,
  readOnly=true,
  iLiked,
  disLiked,
  deleteCardILike,
  setCardILike,
  viewCountInMobile=false
}) => {
  const { animate, ref } = useAnimation();

  const classNameLikesIcon = "likes__icon"+
                              (isILiked?" likes__icon--liked":"")+
                              (readOnly?"":" likes__icon--clickable");
  const classNameLikesCount = "likes__count" +
                              (likesCount?"":" likes__count--without-likes") +
                              (viewCountInMobile?" likes__count--view-in-mobile":"");

  function clickLike() {
    if(readOnly) return;
    if (isILiked) {
      disLiked();
      deleteCardILike();
    } else {
      iLiked();
      setCardILike();
      animate();
    }
  }

  function shortCount(count){
    if((count / 1000).toFixed(0) > 0){
      return (count /1000).toFixed(1).toString() + 'M';
    }
    if((count / 100).toFixed(0) > 0){
      return (count /100).toFixed(1).toString() + 'K';
    }
    return count;
    
  }

  return (
    <div className="likes" ref={ref}>
      <div className={classNameLikesIcon} onClick={clickLike} >
        <LikesIcon />
      </div>
      <div className={classNameLikesCount}>
        <p>{shortCount(likesCount)}</p>
      </div>
    </div> 
  );
};

export default Likes;

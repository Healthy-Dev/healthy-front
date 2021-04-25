import React, { FC, memo } from "react";
import "./index.scss";
import { ReactComponent as InstagramIcon } from "../../../assets/icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/icons/twitter.svg";

const IMAGE_DEFAULT =
  "https://res.cloudinary.com/du7xgj6ms/image/upload/v1605986953/UserPlaceHolder_sgvgm4.png";

type UserProps = {
  dataUser: any;
};

type SocialProps = {
  icon: any;
  url: string;
};

const Social: FC<SocialProps> = memo(({ url, icon: Icon }) => (
  <a href={url} target="_blank noopener noreferrer">
    <Icon />
  </a>
));

const User: FC<UserProps> = ({ dataUser }) => {
  return (
    <div className="user">
      <figure className="user__img">
        <img src={dataUser?.user?.profilePhoto || IMAGE_DEFAULT} alt="profile" />
      </figure>
      <h2>{dataUser?.user.name}</h2>
      <h3 className="user__social">
        {dataUser?.user?.instagram && (
          <Social icon={InstagramIcon} url={dataUser.user.instagram} />
        )}
        {dataUser?.user?.twitter && (
          <Social icon={TwitterIcon} url={dataUser.user.twitter} />
        )}
        @{dataUser?.user.username}
      </h3>
    </div>
  );
};

export default User;

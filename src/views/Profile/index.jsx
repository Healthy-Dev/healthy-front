import React from "react";
import "./index.scss";
import { ReactComponent as MoreIcon } from "assets/icons/more-vert.svg";
import Carrousel from "components/Profile/Carrousel"

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__header--img"><img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile" /></div>
        <div className="profile__header--info">
          <h2>Joel Done</h2>
          <span>
            <MoreIcon className="icon" />
          </span>
        </div>
      </div>
      <div>
        <Carrousel />
        <Carrousel />
        <Carrousel />
        <Carrousel />
      </div>
    </div>
  )
}

export default Profile;
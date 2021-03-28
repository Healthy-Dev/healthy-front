import React from 'react'
import { useLocation } from 'react-router';


const LinkButton = ({ path, name, icon: Icon, onClickButton }) => {
  const { pathname } = useLocation();

  return (
    <button
      className={`nav-bar-button ${pathname === path && "active"}`}
      onClick={onClickButton}>
      <Icon className="nav-bar-icons" />
      <span>{name}</span>
    </button>
  )
}

export default LinkButton
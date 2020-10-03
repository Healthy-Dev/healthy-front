import React from "react";
// Styles
import "./index.scss";

const UserCreated = () => {
	return (
		<div className="user-created-container">
      <p className='user-created'>¡Tu usuario ya fue creado!</p>
      <p className='user-created-confirm'>Confirma tu cuenta desde tu mail</p> 
			<h1>
				<span className="healthy">Healthy</span> <span className="dev">Dev</span>
			</h1>
		</div>
	);
};

export default UserCreated;
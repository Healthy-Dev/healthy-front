import React from "react";
import "./index.scss";

import Button from "components/_shared/Button";

const LinkButton = ({ icon: Icon, link, title }) => {
	return (
		<a
			className="link__button"
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			aria-hidden="true"
			tabIndex="-1"
		>
			<Button className={title} type="button">
				<Icon />
				Continuar con&nbsp;<span className="link__button--title">{title}</span>
			</Button>
		</a>
	);
};

export default LinkButton;

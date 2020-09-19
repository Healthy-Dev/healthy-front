import React from 'react';
import './index.scss'
import { ReactComponent as PlusIcon} from 'assets/icons/plus.svg';
import { Link } from 'react-router-dom';

const CreateCardButton = () => {
	return (
		<Link to="/new">
			<button className="home-button">
				<PlusIcon />
			</button>
		</Link>
	);
};

export default CreateCardButton;

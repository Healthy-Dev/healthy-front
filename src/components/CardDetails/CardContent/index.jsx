import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import MoreOptions from "components/_shared/MoreOptions";
import { ContextModal } from "hooks/useModal";

const CardContent = ({
  photo,
  title,
  id,
  externalUrl,
  description,
  category,
  creatorInfo,
  createdAt,
  toggleModalConfirm,
  isYourCard,
}) => {
  const { showComponent, showModal, setID, setExtra } = useContext(ContextModal);
  const editData = {
    photo,
    title,
    id,
    description,
    externalUrl,
    category,
  };

  function editar() {
    showModal();
    showComponent("edit-card");
    setID(id);
    setExtra(editData);
  }

  let optionsModalCreator = [
    { title: "Editar", fn: editar },
    { title: "Eliminar", fn: toggleModalConfirm },
  ];

  let optionsModalDefault = [
    // TODO: Crear funcionalidad para reportar tarjeta (Firebase)
    { title: "Reportar", fn: () => console.log("report") }
  ];

  function formatDate(createdAT) {
    const date = new Date(createdAT);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-AR', options);
  }

  return (
    <div className="card__content">
      <section className="card__content--more">
        <div className="card__content--more-img">
          <img src={creatorInfo.profilePhoto} alt="profile" />
        </div>
        <h3 className="card__content--more-user">{creatorInfo.name}</h3>
        {/* <button className="card__content--more-button">Seguir</button> */}
        <div className="card__content--more-options">
          <MoreOptions
            optionsModal={isYourCard() ? optionsModalCreator : optionsModalDefault}
          />
        </div>
      </section>
      <p className="card__content--date">{formatDate(createdAt)}</p>
      <p className="card__content--description">
        {description}{" "}
        <a href={externalUrl} target="_blank" rel="noreferrer noopener">
          Ver más.
				</a>
      </p>
    </div>
  );
};

CardContent.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string,
  creatorInfo: PropTypes.object,
  createdAt: PropTypes.string,
  toggleModalConfirm: PropTypes.func,
  isYourCard: PropTypes.func,
};

export default React.memo(CardContent);

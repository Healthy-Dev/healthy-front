import React, { useEffect } from "react";
import "./index.scss";
import Card from "components/Profile/Card"
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestHome } from "state/home/actions";
// Selectores
import { HomeSelector } from "state/home/selectors";

const Carrousel = () => {
    const d = useDispatch();
    const { data, loading, error } = useSelector((state) => HomeSelector(state));

    useEffect(() => {
        d(requestHome());
    }, [d]);

    return (
        <div className="carrousel">
            {data &&
                data.map(({ photo, title, id }) => (
                    <Card img={photo} title={title} key={id} id={id} />
                ))}
        </div>
    )
}

export default Carrousel;
import React from "react";

const Travel = props => (
    <div>
        <h2>{props.destination}</h2>
        <p>{props.country}</p>
        <img
            src={props.photo}
            alt={props.destination}
        />
        <p>{props.distance}</p>
    </div>
);

export default Travel;
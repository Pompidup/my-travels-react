import React from "react";

import travels from "../src/Travels";

const Travel = () => (
    <div>
        {travels.map((travel, index) => (
            <div key={index}>
                <h2>{travel.destination}</h2>
                <p>{travel.country}</p>
                <img
                    src={travel.photo}
                    alt={travel.destination}
                />
                <p>{travel.distance}</p>
            </div>
        ))}
    </div>
);

export default Travel;
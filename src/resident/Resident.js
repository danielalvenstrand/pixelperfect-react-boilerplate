import React from 'react';
import './Resident.css';

const Resident = (props) => (
    <article className="Resident">
        <h3>{props.name} - {props.isHome ? "Home" : "Not home"}</h3>
        <button onClick={props.toggleResident}>
            {props.isHome ? "Leave home" : "Go home"}
        </button>
    </article>
);

export default Resident;
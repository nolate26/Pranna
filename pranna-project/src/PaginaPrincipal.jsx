import React from "react";
import TeamProgress from "./TeamProgress";
import './PaginaPrincipal.css';

function PaginaPrincipal() {
    return (
        <div className="App">
            <TeamProgress />
            <a href='/'>Volver Atras</a>
        </div>
    );
}

export default PaginaPrincipal;
import React from "react";
import './PaginaPrincipal.css';
import carImage from '/auto_1.png';


export const ProgressBar = ({ teamName, color, progress, onButtonClick, onWin }) => {
    const handleButtonClick = () => {
        // si llega a 20 se despliega el mensaje de ganador
        onButtonClick();
        if (progress + 1 === 20) {
            onWin(teamName);
        }

    };

    return (
        <div className="container">
            <div className="team-name">{teamName}</div>
            <div className="progress-bar">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${(progress / 20) * 100}%`, backgroundColor: color }}
                ></div>
                <img
                    src={carImage}
                    alt="Car"
                    className="car"
                    style={{ left: `calc(${(progress / 20) * 100}% - 25px)` }}
                />
                <span className="progress-label">{progress}</span>
            </div>
            <button onClick={handleButtonClick} className="button-85">¡+1 Punto!</button>
        </div>
    );
};

export default ProgressBar;
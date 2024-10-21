import React from "react";
import './PaginaPrincipal.css';

export const ProgressBar = ({ teamName, color, progress, onButtonClick }) => {
    const handleButtonClick = () => {
        if (progress < 19) {
            onButtonClick();
        } else {
            onButtonClick();
            alert(`${teamName} has won!`);
        }
    };

    return (
        <div className="container">
            <div className="team-name">{teamName}</div>
            <div className="progress-bar">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${(progress / 20) * 100}%`, backgroundColor: color }}
                >
                    <span className="progress-label">{progress}</span>
                </div>
            </div>
            <button  onClick={handleButtonClick} className="button-85">+1 Punto!</button>
        </div>
    );
};

export default ProgressBar;
import React from "react";

export const ProgressBar = ({ teamName, color, progress, onButtonClick }) => {
    const handleButtonClick = () => {
        if (progress < 20) {
            onButtonClick();
        } else {
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
                {/* Aquí movemos el marcador de puntos hacia la derecha */}
                <span className="progress-label">{progress}</span>
                </div>
            </div>
            <button onClick={handleButtonClick} className="progress-button">Increase</button>
        </div>
    );
};

export default ProgressBar;
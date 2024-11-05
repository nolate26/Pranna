import React from "react";
import './PaginaPrincipal.css';
import carImage from '/red_car.png';
import carImage2 from '/blue_car.png';
import carImage3 from '/green_car.png';


export const ProgressBar = ({ teamName, color, progress, onButtonClick, onWin }) => {
    const handleButtonClick = () => {
        // si llega a 20 se despliega el mensaje de ganador
        onButtonClick();
        if (progress + 1 === 20) {
            onWin(teamName);
        }

    };

    const getCarImage = (teamName) => {
        switch (teamName) {
            case "Equipo 1":
                return carImage;
            case "Equipo 2":
                return carImage2;
            case "Equipo 3":
                return carImage3;
            default:
                return carImage; // Default image if teamName doesn't match
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
                    src={getCarImage(teamName)}
                    alt="Car"
                    className="car"
                    style={{ left: `calc(${(progress / 20) * 100}% - 25px)` }}
                    onClick={handleButtonClick}
                />
                <span className="progress-label">{progress}</span>
            </div>
            {/* <button onClick={handleButtonClick} class="pulse">¡+1 Punto!</button> */}
            {/* <button onClick={handleButtonClick} className="button-85">¡+1 Punto!</button> */}
        </div>
    );
};

export default ProgressBar;
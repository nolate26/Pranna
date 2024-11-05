import React, { useState } from "react";
import ProgressBar from "./progressBar";
import './PaginaPrincipal.css';

const TeamProgress = () => {
    const [round, setRound] = useState(0);
    const [team1Progress, setTeam1Progress] = useState(0);
    const [team2Progress, setTeam2Progress] = useState(0);
    const [team3Progress, setTeam3Progress] = useState(0);
    const [winningTeam, setWinningTeam] = useState(null);

    const handleWin = (teamName) => {
        setWinningTeam(teamName);
    };

    return (
        <div>
            <button onClick={() => setRound(round + 1)} className="button-title">Ronda {round}</button>
            {winningTeam && (
                <div className="winner">
                    <h1>{`¡ ${winningTeam} ganador!`}</h1>
                    <img src="copa.png" alt="Trophy" className="trophy" />
                </div>
            )}
            
            <ProgressBar
                teamName="Equipo 1"
                color="rgb(220, 20, 60"
                progress={team1Progress}
                onButtonClick={() => setTeam1Progress(team1Progress + 1)}
                onWin={handleWin}
            />
            <ProgressBar
                teamName="Equipo 2"
                color="rgb(30, 144, 255)"
                progress={team2Progress}
                onButtonClick={() => setTeam2Progress(team2Progress + 1)}
                onWin={handleWin}
            />
            <ProgressBar
                teamName="Equipo 3"
                color="rgb(124, 252, 0)"
                progress={team3Progress}
                onButtonClick={() => setTeam3Progress(team3Progress + 1)}
                onWin={handleWin}
            />
        </div>
    );
};

export default TeamProgress;
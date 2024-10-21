import React, { useState } from "react";
import ProgressBar from "./progressBar";
import './PaginaPrincipal.css';

const TeamProgress = () => {
    const [team1Progress, setTeam1Progress] = useState(0);
    const [team2Progress, setTeam2Progress] = useState(0);
    const [team3Progress, setTeam3Progress] = useState(0);


    return (
        <div>
            <ProgressBar
                teamName="Equipo 1"
                color="red"
                progress={team1Progress}
                onButtonClick={() => setTeam1Progress(team1Progress + 1)}
            />
            <ProgressBar
                teamName="Equipo 2"
                color="blue"
                progress={team2Progress}
                onButtonClick={() => setTeam2Progress(team2Progress + 1)}
            />
            <ProgressBar
                teamName="Equipo 3"
                color="green"
                progress={team3Progress}
                onButtonClick={() => setTeam3Progress(team3Progress + 1)}
            />
        </div>
    );
};

export default TeamProgress;
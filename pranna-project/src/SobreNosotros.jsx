import { useState } from "react";
import './SobreNosotros.css';
import imagenClaudia from '/Claudia.jpeg';
import imagenAlfredo from '/Alfredo.jpeg';    
import logoEmpresa from '/logo.jpg';  // Ruta del logo de la empresa

export default function SobreNosotros() {
    const [nombre, setNombre] = useState(null);

    function handleChange(nombre) {
        setNombre(nombre);
    }

    return (
        <div className="sobre-nosotros-container">
            <div className="header">
                <img src={logoEmpresa} alt="Logo de la empresa" className="logo-empresa" />
                <h1>El Equipo Pranna</h1>
            </div>
            <div className="integrantes">
                <div className="integrante">
                    <img src={imagenClaudia} alt="Avatar de Claudia Orellana" />
                    <div className="integrante-info">
                        <h2>Claudia Orellana</h2>
                        <ul className="budget-list">
                            <li>Psicóloga Organizacional, UPD.</li>
                            <li>Diplomado en Recursos Humanos UAI.</li>
                            <li>INPACT Coaching y Programación NeuroLingüística.</li>
                            <li>Postítulo en Mediación Laboral.</li>
                            <li>Especialista en Gestión del Cambio, Armonía Laboral, Servicio al Cliente, Equipos y Liderazgo.</li>
                            <li>Foco en comunicaciones y conflictos.</li>
                            <li>Psicóloga en Inacap.</li>
                        </ul>
                    </div>
                </div>
                <div className="integrante">
                    <img src={imagenAlfredo} alt="Avatar de Alfredo Montecinos" />
                    <div className="integrante-info">
                        <h2>Alfredo Montecinos</h2>
                        <ul className="budget-list">
                        <li>Psicólogo Organizacional, UDP.</li>
                        <li>Diplomado en Recursos Humanos, UAI.</li>
                        <li>Profesor de Curso Transformación Digital y Sustentabilidad para el MBE en Facultad de Ingeniería Industrial de la Universidad de Chile.</li>
                        <li>Experiencia de más de 15 años en liderar proyectos transversales en la organización, como transformación cultural, programas de liderazgo, programas de trainee y talentos.</li>
                        </ul>

                    </div>
                </div>
            </div>
            <a href='/' className="volver-atras">Volver Atrás</a>
        </div>
    );
}

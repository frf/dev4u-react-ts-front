import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.jpg'
import LandingLogo from '../../assets/images/landing.svg'
import StudyImg from '../../assets/images/icons/study.svg'
import GiveClassesImg from '../../assets/images/icons/give-classes.svg'
import TotalConnectionsImg from '../../assets/images/icons/purple-heart.svg'

import './styles.css';
import api from '../../services/api';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
           const { total } = response.data; 
           setTotalConnections(total);
        });
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt="Proffy" />
                    <h2>Your developer platform</h2>
                </div>

                <img 
                    src={LandingLogo}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                    <img src={StudyImg} alt="Search developer" />
                    Serach Developer
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                    <img src={GiveClassesImg} alt="I'm developer" />
                    I'm developer
                    </Link>
                </div>

                <span className="total-connections">
                Total de {totalConnections} connections alrady <img src={TotalConnectionsImg} alt="Heart Purple" />
                </span>
            </div>
        </div>
    )
}

export default Landing;
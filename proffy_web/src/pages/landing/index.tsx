import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImag from '../../assets/images/logo.svg';
import landingImag from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveChassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';
import './styles.css';

const Landing = () => {
    const [ totalConnetions, setTotalConnections ] = useState(0);

    useEffect(() => {
        api.get('/connections').then(response => {
            const {total} = response.data

            setTotalConnections(total)
        })
    }, [])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">

                <div className="logo-container">
                    <img src={logoImag} alt="Proffy"/>
                    <h2>Sua plataforma de estudo online.</h2>
                </div>

                <img 
                className="hero-image" 
                src={landingImag} 
                alt="Plataforma de estudos"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon}alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveChassesIcon} alt="Dar aulas" />
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnetions} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;
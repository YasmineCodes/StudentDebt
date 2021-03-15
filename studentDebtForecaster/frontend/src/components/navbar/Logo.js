import React from 'react';
import Tilt from 'react-tilt';
import './navbar.css'; 
import logoImage from './student-debt-icon.png';


export const Logo = () => {
    return (
            <Tilt className="Tilt" options={{ max : 30 }} style={{}}>
                <div className="Tilt-inner"> <img alt='logo' src={logoImage}></img> </div>
            </Tilt>); 
}


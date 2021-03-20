import Info from '@material-ui/icons/Info';
import Tilt from 'react-tilt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import React from 'react';
import './navbar.css'; 


export const About = () => {
    return (
            <Tilt className="Tilt" options={{ max : 70 }} style={{}} >
                <div className="Tilt-inner"> <InfoOutlinedIcon /> </div>
            </Tilt>
    ); 
}

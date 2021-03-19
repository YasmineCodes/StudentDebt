import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './particlesConfig';
import './particles.css';

export const MyParticles = () => {
    return <Particles  height="100vh" width="100vw" style={{position: 'absolute'}} params={particlesConfig} />
    
    // <Particles className='particles' params={particlesParams} />
}
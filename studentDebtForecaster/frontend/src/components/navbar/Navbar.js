import React from "react";
import { Link } from "react-router-dom"; 
import { Logo } from "./Logo";
import { AboutButton } from "./AboutButton";

export const Navbar = () => {
    return (
        <nav class='nav-bar' style={{}}>
            <Link to="/"><Logo/></Link>
            <Link to="/about"><AboutButton/></Link>
        </nav>
    ); 
}
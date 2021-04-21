import React from "react";
import { NavLink } from "react-router-dom"; 
import { Logo } from "./Logo";
import { AboutButton } from "./AboutButton";

export const Navbar = () => {
    return (
        <nav class='nav-bar' style={{}}>
            <NavLink exact to="/"><Logo/></NavLink>
            <NavLink to="/about"><AboutButton/></NavLink>
        </nav>
    ); 
}
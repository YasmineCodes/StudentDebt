import React, { Component } from "react";
import { render } from "react-dom";
import { Logo } from "./navbar/Logo";
import { About } from "./navbar/About";
import { InputForm } from "./InputForm/InputForm"; 

export default class App extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <div>
                <nav class='nav-bar' style={{}}>
                {/* <p>one</p>
                <p>Two</p> */}
                    <a><Logo /></a>
                    <a><About /></a>
                </nav>
                <InputForm />
            </div>
        );
                
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv)
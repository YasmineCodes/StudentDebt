import React, { Component } from "react";
import { render } from "react-dom";
import { Logo } from "./navbar/Logo";
import { About } from "./navbar/About";
import { InputForm } from "./InputForm/InputForm"; 

//TODO: create function to switch between input form and results view 
//TODO: Build results view 
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inInputStage: true,
            prediction: null, 
        }
    }

    renderPrediction = (pred) => {
        return <h3>{`Prediction: ${this.state.prediction}`}</h3>; 
    }

    formCallBackFunction = (pred) => {
        this.setState({ inInputStage: false, prediction: pred });
    }

    renderInputFrom = () => {
        return <InputForm formCallBack={(pred) => this.formCallBackFunction(pred)} />; 
    }

    render() {
        return (
            <div>
                <nav class='nav-bar' style={{}}>
                    <a><Logo/></a>
                    <a><About/></a>
                </nav>
                {this.state.inInputStage ? this.renderInputFrom() : this.renderPrediction()}
            </div>
        );
                
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv)
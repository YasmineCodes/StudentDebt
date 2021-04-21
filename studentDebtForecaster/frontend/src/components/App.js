import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom"; 
import { render } from "react-dom";
import { Logo } from "./navbar/Logo";
import { AboutButton } from "./navbar/AboutButton";
import { About } from "./About"
import { InputForm } from "./InputForm/InputForm";
import { PredictionView } from "./predictionView/PredictionView";
import { MyParticles } from "./particles/Particles"; 

//TODO: create function to switch between input form and results view 
//TODO: Build results view 
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inInputStage: true,
            prediction: null,
            state: '',
            city: '',
            school: ''
        }
    }

    renderPrediction = () => {
        console.log('renderPrediction Called')
        return <PredictionView data={this.state} />; 
        // <h3>{`Prediction: ${this.state.prediction}`}</h3>;
    }

    formCallBackFunction = ({prediction, state, city, school}) => {
        this.setState({
            inInputStage: false, prediction: prediction,
            state: state, city: city, school: school});
    }

    renderInputFrom = () => {
        return <InputForm formCallBack={({prediction, city, state, school}) => this.formCallBackFunction({prediction, city, state, school})} />; 
    }


    render() {
        return (
            <BrowserRouter>
                <div>
                    <MyParticles/>
                    <nav class='nav-bar' style={{}}>
                        <a><Logo/></a>
                        <a><AboutButton/></a>
                    </nav>
                    {/* {this.state.inInputStage ? this.renderInputFrom() : this.renderPrediction()} */}
                    <Route exact path="/" render={() => this.renderInputFrom() } />
                    <Route path="/about" component={About}/>
                </div>
            </BrowserRouter>
        );
                
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv)
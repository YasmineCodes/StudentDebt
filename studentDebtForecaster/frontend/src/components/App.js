import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import { render } from "react-dom";
import { Navbar } from "./navbar/Navbar"; 
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
                    <Navbar />
                    <Switch>
                        <Route exact path="/" render={() => this.renderInputFrom()} />
                        <Route path="/prediction" render={() => this.renderPrediction() }/>
                        <Route path="/about" component={About} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
                
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv)
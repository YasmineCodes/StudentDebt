import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import { render } from "react-dom";
import { Navbar } from "./navbar/Navbar"; 
import { About } from "./About"
import { InputForm } from "./InputForm/InputForm";
import { PredictionView } from "./predictionView/PredictionView";
import { MyParticles } from "./particles/Particles";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import  theme from "./theme";


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
        console.log(`renderPrediction Called. inputstage: ${this.state.inInputStage}`)
        if (this.state.inInputStage) {
            return this.renderInputFrom();
        }
        return <PredictionView data={this.state} />; 
        // <h3>{`Prediction: ${this.state.prediction}`}</h3>;
    }

    formCallBackFunction = ({url, image, prediction, state, city, school}) => {
        this.setState({
            inInputStage: false, url: url, image: image, prediction: prediction,
            state: state, city: city, school: school});
    }

    renderInputFrom = () => {
        return <InputForm formCallBack={({url, image, prediction, city, state, school}) => this.formCallBackFunction({url, image, prediction, city, state, school})} />; 
    }


    render() {
        return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <div >
                        <MyParticles/>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" render={() => this.renderInputFrom()} />
                            <Route path="/prediction" render={() => this.renderPrediction() }/>
                            <Route path="/about" component={About} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        );
                
    }
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv)
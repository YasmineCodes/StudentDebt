import React, { useState } from 'react';
import { useHistory } from "react-router";
import {
    Button,
    Grid,
    Typography,
    TextField,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Radio,
    RadioGroup,
    Collapse,
} from '@material-ui/core';
import { StateInput } from './StateInput';
import { CityInput } from './CityInput';
import { SchoolInput } from './SchoolInput';
import { PredictButton } from './PredictBotton';
import { getCities, getSchools } from './apiCalls'; 


const getPrediction = ({ state, city, school, formCallBack}) => {
    console.log(`from getPrediction: state = ${state.code}, city- ${city}, school- ${school}`);
    var url = "/mlapi/prediction/"
    fetch(url+'?STABBR=' +state.code + '&CITY=' + city + '&INSTNM=' + school)
        .then((response) => {
            if (!response.ok) {
                //TODO: write user feedback for this 
                console.log('Unable to get prediction...')
            }
            return response.json()
        })
        .then((data) => {
            console.log(data.image); 
            formCallBack({url: data.url, image:data.image, prediction: data.prediction, city: city, state: state.label, school: school });

        });
}


//TODO: make all fields required 
export const InputForm = ({formCallBack}) => {
    const [state, setState] = useState('');
    const [cities, setCities] = useState([]);
    const [schools, setSchools] = useState([]); 
    const [city, setCity] = useState('');
    const [school, setSchool] = useState(''); 
    const history = useHistory();
    
    const onPredict = () => {
        //Do nothing if fields are not completed 
        if (state == '' || city == '' || school == '') {
            return; 
        }
       getPrediction({ state: state, city: city, school: school, formCallBack: formCallBack });
        history.push({ pathname: "/prediction" }); 
    }
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                        {'Student Debt Forecast'}
                </Typography> 
            </Grid>
            <Grid item xs={12} align="center">
                <StateInput setState={(s) => {setState(s); getCities(s, setCities)} }/>
            </Grid>
            <Grid item xs={12} align="center">
                <CityInput cities={cities} setCity={(c) => { setCity(c); getSchools(state, c, setSchools)} }/>
            </Grid>
            <Grid item xs={12} align="center">
                <SchoolInput schools={schools} setSchool={(sch) => setSchool(sch) }/>
            </Grid>
            <Grid item xs={12} align="center">
                <PredictButton buttonCallBack={() => onPredict() }/>
            </Grid>
        </Grid>   
    ); 
}


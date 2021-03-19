import React, { useState }from 'react';
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
import { getCities } from './apiCalls'; 


const getPrediction = ({ state, city, school, formCallBack}) => {
    console.log(state, city, school);
    var url = "/mlapi/prediction/"
    fetch(url+'?STABBR=' +state.code + '&CITY=' + city.label + '&INSTNM=' + school.label)
        .then((response) => {
            if (!response.ok) {
                //TODO: write user feedback for this 
                console.log('Unable to get prediction...')
            }
            return response.json()
        })
        .then((data) => {
            formCallBack({prediction: data.prediction, city: city.label, state: state.label, school: school.label}); 
        });
    }
//TODO: make sure city list is adjusted based on state, schools based on city
//TODO: make all fields required 
export const InputForm = ({formCallBack}) => {
    const [state, setState] = useState('');
    const [cities, setCities] = useState([]); 
    const [city, setCity] = useState('');
    const [school, setSchool] = useState(''); 
    console.log('rendering'); 
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
                <CityInput cities={cities} setCity={(c) => setCity(c) }/>
            </Grid>
            <Grid item xs={12} align="center">
                <SchoolInput setSchool={(sch) => setSchool(sch) }/>
            </Grid>
            <Grid item xs={12} align="center">
                <PredictButton buttonCallBack={() => getPrediction({state: state, city: city, school: school, formCallBack: formCallBack})}/>
            </Grid>
        </Grid>   
    ); 
}


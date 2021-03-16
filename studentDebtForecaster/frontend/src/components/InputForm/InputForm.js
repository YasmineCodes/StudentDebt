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


const getPrediction = ({ state, city, school }) => {
    console.log(state, city, school); 
        // const requestOptions = {
        //     method: "GET",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //             STABBR: state, CITY: city, INSTNM: school}),
        // }; 
        // fetch("/mlapi/prediction/", requestOptions)
        //     .then((response) => {
        //         if (!response.ok) {
        //             console.log('Unable to get prediction...')
        //         }
        //         return response.json()
        //     })
        //     .then((data) => {
        //         console.log(data.prediction); 
        //     });
    }

export const InputForm = () => {
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [school, setSchool] = useState(''); 
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                        {'Student Debt Forecast'}
                </Typography> 
            </Grid>
            <Grid item xs={12} align="center">
                <StateInput setState={(s) => setState(s) }/>
            </Grid>
            <Grid item xs={12} align="center">
                <CityInput setCity={(c) => setCity(c) }/>
            </Grid>
            <Grid item xs={12} align="center">
                <SchoolInput setSchool={(sch) => setSchool(sch) }/>
            </Grid>
            <Grid item xs={12} align="center">
                <PredictButton callBack={() => getPrediction({state: state, city: city, school: school})}/>
            </Grid>
        </Grid>   
    ); 
}


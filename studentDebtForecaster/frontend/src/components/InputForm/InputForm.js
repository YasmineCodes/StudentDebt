import React from 'react';
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




export const InputForm = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                        {'Student Debt Forecast'}
                </Typography> 
            </Grid>
            <Grid item xs={12} align="center">
                <StateInput />
            </Grid>
            <Grid item xs={12} align="center">
                <CityInput />
            </Grid>
            <Grid item xs={12} align="center">
                <SchoolInput />
            </Grid>
            <Grid item xs={12} align="center">
                <PredictButton />
            </Grid>

        </Grid>   
    ); 
}


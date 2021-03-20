import React, { useState } from 'react';
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
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getCities } from './apiCalls'; 

// TODO: fill with correct cities, arranged by states 
// const tempCities = [
//     { label: 'New York City' },
//     { label: 'Miami' },
//     { label: 'Los Angeles' }, 
//     { label: 'Glendale' }]; 

export const CityInput = ({ setCity, cities}) => {
    return (
        <Autocomplete
            id="country-select-demo"
            style={{ width: 300 }}
            options={cities}
            autoHighlight
            autoComplete
            disabled={cities == []}
            getOptionLabel={(option) => option}
            renderOption={(option) => (
                <React.Fragment>
                    {option}
                </React.Fragment>
            )}
            onChange={(event, newValue) => {
                        setCity(newValue);
                    }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a city..."
                    variant="outlined"
                    onChange={()=> setCity()}
                // inputProps={{
                //     ...params.inputProps,
                //     autoComplete: 'new-password', // disable autocomplete and autofill
                // }}               
                />
            )}
        />); 

}
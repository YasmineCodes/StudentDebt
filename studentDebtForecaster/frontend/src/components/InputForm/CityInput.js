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
import Autocomplete from '@material-ui/lab/Autocomplete';

const cities = [
        { label: 'New York City'},
        { label: 'Miami'},
        { label: 'Los Angeles' }]

export const CityInput = () => {
    return (
        <Autocomplete
            id="country-select-demo"
            style={{ width: 300 }}
            options={cities}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(option) => (
                <React.Fragment>
                    {option.label}
                </React.Fragment>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a city..."
                    variant="outlined"
                // inputProps={{
                //     ...params.inputProps,
                //     autoComplete: 'new-password', // disable autocomplete and autofill
                // }}               
                />
            )}
        />); 

}
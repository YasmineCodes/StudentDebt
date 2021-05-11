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

//TODO: add real list of schools, organized by state/cities 
const schools = [
        { label: 'Columbia University'},
        { label: 'University of Illinois' },
        {label: 'Glendale Community College'},
        { label: 'Brooklyn College' }]

export const SchoolInput = ({setSchool, schools}) => {
    return (
        <Autocomplete
            id="country-select-demo"
            style={{ width: 300 }}
            options={schools}
            autoHighlight
            autoComplete
            disabled={schools.length<1}
            getOptionLabel={(option) => option}
            renderOption={(option) => (
                <React.Fragment>
                    {option}
                </React.Fragment>
            )}
            onChange={(event, newValue) => {
                        setSchool(newValue);
                    }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a school..."
                    variant="outlined"
                // inputProps={{
                //     ...params.inputProps,
                //     autoComplete: 'new-password', // disable autocomplete and autofill
                // }}               
                />
            )}
        />); 

}


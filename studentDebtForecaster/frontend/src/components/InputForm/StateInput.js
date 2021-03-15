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

const states = [
        { code: 'NY', label: 'New York'},
        { code: 'FL', label: 'Florida'},
        { code: 'CA', label: 'California' }]

export const StateInput = () => {
    return (
        <Autocomplete
            id="country-select-demo"
            style={{ width: 300 }}
            options={states}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(option) => (
                <React.Fragment>
                    {option.label}({option.code})
                </React.Fragment>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a state..."
                    variant="outlined"
                // inputProps={{
                //     ...params.inputProps,
                //     autoComplete: 'new-password', // disable autocomplete and autofill
                // }}               
                />
            )}
        />); 

}
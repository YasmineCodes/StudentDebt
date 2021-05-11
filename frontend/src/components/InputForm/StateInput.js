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

//TODO: add relevant list of states 
const states = [{code: 'AL', label: 'Alabama'},
    { code: 'AK', label: 'Alaska' }, { code: 'AZ', label: 'Arizona' }, { code: 'AR', label: 'Arkansas'}, { code: 'CA', label: 'California' }, { code: 'CO', label: 'Colorado' },
    {code: 'CT', label: 'Connecticut'}, {code: 'DE', label: 'Delaware' }, {code: 'FL', label: 'Florida' }, { code: 'GA', label: 'Georgia' }, { code: 'HI', label: 'Hawaii' }, { code: 'ID', label: 'Idaho' }, { code: 'IL', label: 'Illinois' }, { code: 'IN', label: 'Indiana' }, { code: 'IA', label: 'Iowa' }, { code: 'KS', label: 'Kansas' }, { code: 'KY', label: 'Kentucky' }, { code: 'LA', label: 'Louisiana'}, {code: 'ME', label: 'Maine' }, { code: 'MD', label: 'Maryland' }, { code: 'MA', label: 'Massachusetts' }, { code: 'MA', label: 'Michigan' }, { code: 'MN', label: 'Minnesota' }, { code: 'MS', label: 'Mississippi' }, { code: 'MO', label: 'Missouri' }, { code: 'MT', label: 'Montana' }, { code: 'NE', label: 'Nebraska' }, { code: 'NV', label: 'Nevada' }, { code: 'NH', label: 'New Hampshire' }, { code: 'NJ', label: 'New Jersey' }, { code: 'NM', label: 'New Mexico' }, { code: 'NY', label: 'New York' }, {code: 'NC', label: 'North Carolina'}, {code: 'ND', label: 'North Dakota'}, {code: 'OH', label: 'Ohio'}, {code: 'OK', label: 'Oklahoma'}, {code: 'OR', label: 'Oregon'}, {code: 'PA', label: 'Pennsylvania'}, {code:'RI', label: 'Rhode Island'}, {code: 'SC', label: 'South Carolina'}, {code: 'SD', label: 'South Dakota'}, {code: 'TN', label: 'Tennessee'}, {code: 'TX', label: 'Texas'}, {code: 'UT', label: 'Utah'}, {code: 'VT', label: 'Vermont'}, {code: 'VA', label: 'Virginia'}, {code: 'WA', label: 'Washington'}, {code: 'WV', label: 'West Virginia'}, {code: 'WI', label: 'Wisconsin'}, {code: 'WY', label: 'Wyoming'}]


export const StateInput = ({setState}) => {
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
            onChange={(event, newValue) => {
                        console.log(newValue)
                        setState(newValue);
                    }}
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
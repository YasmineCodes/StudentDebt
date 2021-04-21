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
import "./predictionView.css"; 



//TODO: make all fields required 
export const PredictionView = ({data}) => {
    // const [prediction, setPrediction] = useState(null);
    
    return (
        <Grid id="prediction-container" container spacing={1} direction="column" justify="center" alignItems="center">
            <Grid item xs={12} align="center">
                <Typography component="h3" variant="h4">
                    {'Here is your forecast:'}
                </Typography> 
            </Grid>
            <Grid item xs={12} align="center">
               <Typography component="h5" variant="h4">
                    {`The median predicted debt for students 
                        attending ${data.school} in ${data.city}, ${data.state} is \$${data.prediction}`}
                </Typography> 
            </Grid>
        </Grid>   
    ); 
}


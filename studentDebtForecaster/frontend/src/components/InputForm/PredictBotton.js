import React from 'react';
import {
    Button,
    Grid,
} from '@material-ui/core';

export const PredictButton = ({ buttonCallBack }) => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Button variant="outlined" size="large" onClick={() => buttonCallBack()}>
                    Predict
                </Button>
            </Grid>
        </Grid>
    );
}

 
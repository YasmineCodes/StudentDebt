import React from 'react';
import {
    Button,
    Grid,
} from '@material-ui/core';

export const PredictButton = ({ callBack }) => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Button variant="outlined" size="large" onClick={() => callBack()}>
                    Predict
                </Button>
            </Grid>
        </Grid>
    );
}

 
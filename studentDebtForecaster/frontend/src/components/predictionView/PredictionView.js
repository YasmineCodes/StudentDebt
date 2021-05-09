import React, { useState }from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
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
        <Card id="prediction-container">
            <CardActionArea>
                <CardMedia
                    className="media"
                    image="https://logo.clearbit.com/www.brooklyn.cuny.edu"
                    title="placeholder"
                />
                <CardContent>
                <Typography variant="h5" component="h6">
                        School
                </Typography>
                <Typography gutterBottom variant="h6" component="h5" color="textSecondary">
                    {`${data.school} \n ${data.city}, ${data.state}`}
                </Typography>
                <Typography  variant="h5" component="h6">
                        Predicted Debt 
                </Typography>
                <Typography variant="h6" component="h5" color="textSecondary" >
                    {`\$${data.prediction}`}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </Card>
    ); 
}


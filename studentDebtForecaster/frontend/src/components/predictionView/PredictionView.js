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
    console.log(data)
    return (
        <div>
            {/* <img src={require(data.image)} /> */}
        <Card id="prediction-container">
            
            <CardActionArea>
                    <CardMedia
                        
                    className="media"
                    image={data.image}
                    title="placeholder"
                ></CardMedia>
                <CardContent>
                <Typography variant="h5" component="h6">
                        School
                </Typography>
                <Typography gutterBottom variant="h6" component="h5" color="textSecondary">
                            {`${data.school}`}
                            <br></br>
                            {`${data.city}, ${data.state}`}
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
                <Button size="small" color="primary" href={`https://${data.url}`} target="_blank">
                Visit School Website
                </Button>
                <Button size="small" color="primary" href={'/'} >
                Get Another Prediction
                </Button>
            </CardActions>
            </Card>
            </div>
    ); 
}


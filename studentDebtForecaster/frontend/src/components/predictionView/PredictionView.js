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
                    image="/static/images/BCFlag.jpeg"
                    title="placeholder"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Placeholder Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    placeholder text: Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
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



        // {/* <Grid id="prediction-container" container spacing={1} direction="column" justify="center" alignItems="center">
        //     <Grid item xs={12} align="center">
        //         <Typography component="h3" variant="h4">
        //             {'Here is your forecast:'}
        //         </Typography> 
        //     </Grid>
        //     <Grid item xs={12} align="center">
        //        <Typography component="h5" variant="h4">
        //             {`The median predicted debt for students 
        //                 attending ${data.school} in ${data.city}, ${data.state} is \$${data.prediction}`}
        //         </Typography> 
        //     </Grid>
        // </Grid>    */}
    ); 
}


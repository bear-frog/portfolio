import React from 'react';
import '../styles/App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {mainCard} from "../styles/mainCard";

function AboutMe() {

    return (
        <Card style={mainCard} sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    유동선 is 곰개구리
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    개발을 합니다, 코딩을 합니다.
                    
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    기술을 위한 개발이 아닌 사람을 위한 개발을 하고자 노력합니다.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default AboutMe;

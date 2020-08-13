import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import {
    Button,
    Paper
} from '@material-ui/core'

import "../style/SecondExample.scss"
import makeStyles from "@material-ui/core/styles/makeStyles";
import red from "@material-ui/core/colors/red";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    img: {
        padding: 0,
        display: "block",
        margin: "0 auto",
        maxHeight: "100%",
        maxWidth: "100%",
    }
}));

function Project(props) {
    const classes = useStyles();
    return (
        <Paper
            className="Project"
            elevation={0}
        >
            <img src={require(`../static/images/${props.item.name}`)} className={classes.img}/>
        </Paper>
    )
}

const items = [
    {
        name: "Slideshow.jpg"
    },
    {
        name: "Slide 2.png",
    },
    {
        name: "Slide 3.png",
    },
]

export default class MyProjectsExample extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        return (
            <Box justifyContent={"center"} display={"flex"} style={{position: "absolute", width: "100%", paddingTop: 50}} >
                <Box>
                    <Carousel
                        className="SecondExample"
                        autoPlay={true}
                        timer={200}
                        animation={"slide"}
                        indicators={true}
                        timeout={500}
                        navButtonsAlwaysVisible={true}
                    >
                        {
                            items.map((item, index) => {
                                return <Project item={item} key={index}/>
                            })
                        }
                    </Carousel>
                </Box>
            </Box>
        )
    }
}
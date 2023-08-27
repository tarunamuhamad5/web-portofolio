import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import WordFromCoWorkers from "../assets/database/WordFromCoWorkers.json";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CardCoWorker from "./CardCoWorker";

const WordCoworkers = () => {
    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "50px",
        color: "black",
        fontWeight: "bold",
        [theme.breakpoints.down("sm")]: {
            fontSize: "50px",
        },
    }));

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    return (
        <Box sx={{ backgroundColor: "#F9F9F9" }}>
            <Container>
                <br />
                <Title variant="h2" align="center">
                    Word from My Co-Workers
                </Title>
                <AutoPlaySwipeableViews enableMouseEvents interval={3000}>
                    {WordFromCoWorkers.map((Word) => (
                        <CardCoWorker Word={Word} />
                    ))}
                </AutoPlaySwipeableViews>
            </Container>
        </Box>
    );
};

export default WordCoworkers;

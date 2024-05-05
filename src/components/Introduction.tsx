"use client";
import React from "react";
import { Box, Button, Container, styled, Typography } from "@mui/material";

export default function Introduction() {
    const OpenCV = () => {
        window.open(
            "https://drive.google.com/drive/folders/1U4g2Pw4w_dB8vp5OjWsL8pp7cXCkmKfH?usp=sharing",
            "_blank"
        );
    };

    const CVButton = styled(Button)(({ theme }) => ({
        color: "black",
        borderColor: "black",
        marginTop: "1rem",
        borderRadius: "10px",
        "&:hover": {
            backgroundColor: "black",
            color: "white",
            borderColor: "white",
        },
    }));

    const TitleHello = styled(Typography)(({ theme }) => ({
        fontSize: "80px",
        color: "black",
        fontWeight: "bold",

        [theme.breakpoints.down("lg")]: {
            fontSize: "80px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "70px",
        },
    }));

    const TitleName = styled(Typography)(({ theme }) => ({
        fontSize: "80px",
        color: "black",
        fontWeight: "bold",

        [theme.breakpoints.down("lg")]: {
            fontSize: "80px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "60px",
        },
    }));

    const Summary = styled(Typography)(({ theme }) => ({
        fontSize: "25px",
        color: "#7E7676",
        [theme.breakpoints.down("lg")]: {
            fontSize: "25px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "18px",
        },
    }));

    const ContainerContent = styled(Container)(({ theme }) => ({
        textAlign: "center",
        [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    }));

    return (
        <Box
            minHeight={"90vh"}
            sx={{
                backgroundColor: "#F9F9F9",
                alignContent: "center",
                display: "flex",
                flexWrap: "wrap",
            }}
        >
            <ContainerContent>
                <TitleHello variant="h1">Hello,</TitleHello>
                <TitleName variant={"h1"}>I'm Taruna!</TitleName>
                <Summary variant={"body2"}>
                    Senior Associates Data Scientist
                    <br />
                    With 1 year experience
                </Summary>
                <CVButton
                    size="large"
                    variant="outlined"
                    style={{}}
                    onClick={OpenCV}
                >
                    Kindly Check My Resume
                </CVButton>
            </ContainerContent>
        </Box>
    );
}

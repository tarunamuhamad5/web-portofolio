import React from "react";
import NavBar from "./NavBar";
import {
    Box,
    Button,
    Container,
    styled,
    Typography,
    useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

const Introduction = () => {
    const theme = useTheme();
    const isMobileDesktop = useMediaQuery(theme.breakpoints.down("lg"));

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const openCv = () => {
        window.open(
            "https://drive.google.com/file/d/1mp4K8rNtmj2baLm-_H0ZLrKgCAUc2lwq/view?usp=sharing",
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

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "80px",
        color: "black",
        fontWeight: "bold",
        [theme.breakpoints.down("lg")]: {
            fontSize: "80",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "70px",
        },
    }));

    const Summary = styled(Typography)(({ theme }) => ({
        fontSize: "30px",
        color: "#7E7676",
        [theme.breakpoints.down("lg")]: {
            fontSize: "15px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
        },
    }));

    const ContainerIntroduction = styled(Container)(({ theme }) => ({
        marginTop: "12%",
        [theme.breakpoints.down("lg")]: {
            marginTop: "8%",
            flexDirection: "column",
            textAlign: "center",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "50%",
            flexDirection: "column",
            textAlign: "center",
        },
    }));

    return (
        <Box
            minHeight={isMobile ? "100vh" : isMobileDesktop ? "30vh" : "100vh"}
            sx={{ backgroundColor: "#F9F9F9" }}
        >
            <NavBar />
            <ContainerIntroduction>
                <Title variant="h3">
                    Hello,
                    <br />
                    I'm Taruna!
                </Title>
                <Summary variant={"body2"}>
                    Electrical Engineer Fresh Graduate from
                    <br />
                    Bandung Institute of Technology
                </Summary>
                <CVButton
                    size="large"
                    variant="outlined"
                    style={{}}
                    onClick={openCv}
                >
                    Check out my CV
                </CVButton>
            </ContainerIntroduction>
            <br />
        </Box>
    );
};

export default Introduction;

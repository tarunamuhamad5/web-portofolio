import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import ContactData from "../assets/database/ContactData.json";
import ContactCard from "./ContactCard";

const Contact = () => {
    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "50px",
        color: "black",
        fontWeight: "bold",
        [theme.breakpoints.down("md")]: {
            fontSize: "50px",
        },
    }));

    const BoxContact = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItem: "center",
        },
    }));

    const ContainerContact = styled(Box)(({ theme }) => ({
        backgroundColor: "#F9F9F9",
        minHeight: "25vh",
    }));

    return (
        <ContainerContact>
            <Container>
                <br />
                <Title variant="h2" align="center">
                    Contact
                </Title>
            </Container>
            <BoxContact>
                {ContactData.map((Contact) => (
                    <ContactCard Contact={Contact} />
                ))}
            </BoxContact>
        </ContainerContact>
    );
};

export default Contact;

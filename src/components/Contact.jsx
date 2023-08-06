import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import ContactData from "../assets/database/ContactData.json";
import ContactCard from "./ContactCard";

const Contact = () => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "60px",
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
  return (
    <Box sx={{ backgroundColor: "#F9F9F9" }}>
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
    </Box>
  );
};

export default Contact;

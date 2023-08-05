import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import DataRoles from "../assets/database/Roles.json";
import CardRoles from "./CardRoles";

const Roles = () => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "60px",
    color: "black",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container>
        <Title align="center" variant="h2">
          What I Do
        </Title>
        <CardRoles DataRoles={DataRoles} />
      </Container>
    </Box>
  );
};

export default Roles;

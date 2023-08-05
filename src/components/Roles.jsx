import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import DataRoles from "../assets/database/Roles.json";
import CardRoles from "./CardRoles";

const Roles = () => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "60px",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
    },
  }));

  const BoxRoles = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container>
        <Title align="center" variant="h2">
          What I Do
        </Title>
        <BoxRoles>
          {DataRoles.map((role) => (
            <CardRoles role={role} />
          ))}
        </BoxRoles>
      </Container>
    </Box>
  );
};

export default Roles;

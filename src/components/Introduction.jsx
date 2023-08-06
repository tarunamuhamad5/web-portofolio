import React from "react";
import NavBar from "./NavBar";
import { Box, Container, Typography, styled, Button } from "@mui/material";

const Introduction = () => {
  const openCv = () => {
    window.open(
      "https://drive.google.com/file/d/1WRBqNAk5ztuVECej_qx_mr23B3NGHc8U/view?usp=sharing",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "70px",
    },
  }));

  const Summary = styled(Typography)(({ theme }) => ({
    fontSize: "30px",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  }));

  const ContainerIntroduction = styled(Container)(({ theme }) => ({
    marginTop: "12%",
    [theme.breakpoints.down("md")]: {
      marginTop: "50%",
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#F9F9F9", minHeight: "100vh" }}>
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
        <CVButton size="large" variant="outlined" style={{}} onClick={openCv}>
          Check out my CV
        </CVButton>
      </ContainerIntroduction>
    </Box>
  );
};

export default Introduction;

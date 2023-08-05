import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Specialist from "../assets/database/Specialist.json";
import CardRole from "./CardRole";
import { useTheme } from "@mui/material/styles";

const Role = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <Typography variant={isMobile ? "h3" : "h2"} align="center" mt="1.5rem">
        What I Do
      </Typography>

      <Container>
        <CardRole data={Specialist} />
      </Container>
    </Box>
  );
};

export default Role;

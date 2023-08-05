import { useTheme } from "@mui/material/styles";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import CardProject from "./CardProject";
import FeaturedProjectData from "../assets/database/FeaturedProjectData.json";

const FeaturedProject = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box height={"auto"} mt={isMobile ? "2rem" : "1rem"}>

      <Typography variant={isMobile ? "h3" : "h2"} align="center">
        Featured Projects
      </Typography>

      <CardProject data={FeaturedProjectData} />
    </Box>
  );
};

export default FeaturedProject;

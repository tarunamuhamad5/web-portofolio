import { useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const FeaturedProject = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Box height={"50vh"} mt={isMobile ? "2rem" : "1rem"}>
        <Typography variant={isMobile ? "h3" : "h2"} align="center">
          Featured Projects
        </Typography>
      </Box>
    </div>
  );
};

export default FeaturedProject;

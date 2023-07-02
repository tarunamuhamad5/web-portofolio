import { useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import CardProject from "./CardProject";
import FeaturedProjectData from "../assets/database/FeaturedProjectData.json";

const FeaturedProject = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Box height={"50vh"} mt={isMobile ? "2rem" : "1rem"}>
        <Typography variant={isMobile ? "h3" : "h2"} align="center">
          Featured Projects
        </Typography>

        <div>
          {/* Card Featured Project */}
          <CardProject data={FeaturedProjectData} />
          {/* Card Featured Project End */}
        </div>
      </Box>
    </div>
  );
};

export default FeaturedProject;

import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <Typography
        variant={isMobile ? "h3" : "h2"}
        align="center"
        mt={isMobile ? "1rem" : "1rem"}
        color={"white"}
      >
        Contact Me
      </Typography>
    </React.Fragment>
  );
};

export default Contact;

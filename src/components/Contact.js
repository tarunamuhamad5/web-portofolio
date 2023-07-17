import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <Typography variant="h2" align="center">
        Contact Me
      </Typography>
    </React.Fragment>
  );
};

export default Contact;

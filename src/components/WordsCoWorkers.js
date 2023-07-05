import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const WordsCoWorkers = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Typography variant={isMobile ? "h3" : "h2"} align="center">
        Words From My Co-Workers
      </Typography>
    </div>
  );
};

export default WordsCoWorkers;

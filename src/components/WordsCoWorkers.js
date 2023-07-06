import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import WordFromCoWorkers from "../assets/database/WordFromCoWorkers.json";
import CardWords from "./CardWords";

const WordsCoWorkers = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Box>
        <Typography
          variant={isMobile ? "h3" : "h2"}
          align="center"
          mt={isMobile ? "2rem" : "1rem"}
        >
          Words From My Co-Workers
        </Typography>
        <CardWords data={WordFromCoWorkers} />
      </Box>
    </div>
  );
};

export default WordsCoWorkers;

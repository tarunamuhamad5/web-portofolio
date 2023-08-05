import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import WordFromCoWorkers from "../assets/database/WordFromCoWorkers.json";
import CardWords from "./CardWords";

const WordsCoWorkers = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <Container>
        <Typography
          variant={isMobile ? "h3" : "h2"}
          align="center"
          mt={isMobile ? "2rem" : "1rem"}
          mb={isMobile ? "1rem" : "1rem"}
        >
          Words From My Co-Workers
        </Typography>

        <CardWords data={WordFromCoWorkers} />
      </Container>
    </Box>
  );
};

export default WordsCoWorkers;

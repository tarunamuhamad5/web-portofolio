import {
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import specialist from "../assets/database/specialist.json";
import SwipeableViews from "react-swipeable-views";
import CardRole from "./CardRole";
import { useTheme } from "@mui/material/styles";

const Role = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container columns={20}>
      <Grid item xs={1}></Grid> {/* Grid Left */}
      {/* Content Here */}
      <Grid item xs={18}>
        <Typography variant={isMobile ? "h3" : "h2"} align="center">
          What I'm Do
        </Typography>

        <CardRole data={specialist} />
      </Grid>
      {/* Content End */}
      <Grid item xs={1}></Grid> {/* Grid Right */}
    </Grid>
  );
};

export default Role;

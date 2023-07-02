import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
  useMediaQuery,
  Typography,
  Box,
  Grid,
  Avatar,
  styled,
} from "@mui/material";
import PasFoto from "../assets/images/PasFoto.jpg";
import "../style/Home.css";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Box sx={{ height: "95vh" }}>
        <Grid
          container
          columns={20}
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={1}></Grid>
          {/* Left Section */}
          <Grid item xs={isMobile ? 18 : 10}>
            <Typography variant={isMobile ? "h2" : "h1"}>
              Hello,
              <br />
              I'm Taruna!
            </Typography>
            <Typography variant={isMobile ? "h6" : "h4"}>
              Fresh Graduated Electrical Engineer from Bandung Institute of
              Technology
            </Typography>
          </Grid>
          {/* End of Left Section */}

          {/* Right Section */}
          <Grid item xs={isMobile ? 1 : 8} align="center">
            <img className="PicturePorto" src={PasFoto}></img>
          </Grid>
          {/* End of Right Section */}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;

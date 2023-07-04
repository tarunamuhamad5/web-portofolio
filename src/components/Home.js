import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Typography, Box, Grid } from "@mui/material";
import Introduction from "../assets/images/Introduction.png";
import "../style/Home.css";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={isMobile ? "HomePagesMobile" : "HomePagesDesktop"}>
      <Box sx={{ height: "95vh" }}>
        <Grid
          container
          columns={20}
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={1}></Grid>
          {/* Left Section */}
          <Grid item xs={isMobile ? 1 : 8} align="center"></Grid>
          {/* End of Right Section */}
          <Grid
            item
            xs={isMobile ? 18 : 10}
            align={isMobile ? "left" : "right"}
          >
            <Typography
              variant={isMobile ? "h2" : "h1"}
              color={isMobile ? "black" : "white"}
            >
              Hello,
              <br />
              I'm Taruna!
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h4"}
              align={isMobile ? "left" : "right"}
              color={isMobile ? "black" : "white"}
            >
              Fresh Graduated Electrical Engineer from
              <br />
              Bandung Institute of Technology
            </Typography>
          </Grid>
          {/* End of Left Section */}

          {/* Right Section */}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;

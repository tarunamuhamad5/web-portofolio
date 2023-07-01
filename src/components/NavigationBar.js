import {
  useMediaQuery,
  AppBar,
  Grid,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import "../style/NavigationBar.css";

const NavigationBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
  return (
    <React.Fragment>
      <AppBar position="fixed" elevation={1}>
        <Toolbar className="NavigationBar">
          <Grid container>
            {/* Section Kiri */}
            <Grid item xs={6} align="left">
              <Typography
                className="textNavivationBar"
                variant={isMobile ? "h5" : "h4"}
              >
                kiri
              </Typography>
            </Grid>
            {/* Akhir Code Section Kiri*/}

            {/* Section Kanan */}
            <Grid item xs={6} align="right">
              <Typography
                className="textNavivationBar"
                variant={isMobile ? "h5" : "h4"}
              >
                kanan
              </Typography>
            </Grid>
            {/* Akhir Code Section Kanan*/}
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Offset buat elevate Navigation Bar */}
      <Offset />
    </React.Fragment>
  );
};

export default NavigationBar;

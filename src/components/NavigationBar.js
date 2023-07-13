import {
  useMediaQuery,
  AppBar,
  Grid,
  Toolbar,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import "../style/NavigationBar.css";

const NavigationBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" elevation={1}>
        <Toolbar className="NavigationBar">
          <Grid container columns={20}>
            {/* Section Kiri */}
            <Grid item xs={3} align="left">
              <Typography
                className="textNavivationBar"
                variant={isMobile ? "h5" : "h4"}
              >
                kiri
              </Typography>
            </Grid>
            {/* Akhir Code Section Kiri*/}

            {/* Section Kanan */}
            <Grid item xs align="right">
              <Button
                variant="elevated"
                sx={{ color: "black" }}
                onClick={() => scrollToSection("About Section")}
              >
                About
              </Button>
              <Button
                variant="elevated"
                sx={{ color: "black" }}
                onClick={() => scrollToSection("Role Section")}
              >
                Role
              </Button>
              <Button
                variant="elevated"
                sx={{ color: "black" }}
                onClick={() => scrollToSection("Projects Section")}
              >
                Projects
              </Button>
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

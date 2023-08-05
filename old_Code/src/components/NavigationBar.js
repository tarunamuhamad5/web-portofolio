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
    const scrollPosition = element.offsetTop - 40; // Adjust the value as needed
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" elevation={1}>
        <Toolbar className="NavigationBar">
          <Grid container columns={20}>
            {/* Section Kiri */}
            <Grid item xs={3} align="left"></Grid>
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
                onClick={() => scrollToSection("Projects Section")}
              >
                Projects
              </Button>
              <Button
                variant="elevated"
                sx={{ color: "black" }}
                onClick={() => scrollToSection("ContactMe")}
              >
                Contact
              </Button>
            </Grid>
            {/* Akhir Code Section Kanan*/}
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavigationBar;

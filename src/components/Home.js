import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  useMediaQuery,
  Typography,
  Box,
  Grid,
  Button,
  styled,
  Container,
} from "@mui/material";
import "../style/Home.css";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const openCv = () => {
    window.open(
      "https://drive.google.com/file/d/1WRBqNAk5ztuVECej_qx_mr23B3NGHc8U/view?usp=sharing",
      "_blank"
    );
  };

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "140px",
    color: "black",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "64px",
    },
  }));

  return (
    <div>
      <Box sx={{ minHeight: "100vh" }}>
        <Container>
          <CustomBox>
            <Box sx={{ flex: "1" }}>
              <Title variant="h1" sx={{ mt: 30, mb: 2 }}>
                Hello,
                <br />
                I'm Taruna!
              </Title>
              <Typography variant={isMobile ? "h7" : "h4"}>
                Electrical Engineer Fresh Graduate from
                <br />
                Bandung Institute of Technology
              </Typography>
              <Button
                size={isMobile ? "medium" : "large"}
                variant="outlined"
                style={{
                  color: "black",
                  borderColor: "black",
                  marginTop: "1rem",
                }}
                onClick={openCv}
              >
                Check out my CV
              </Button>
            </Box>
          </CustomBox>
        </Container>
      </Box>
    </div>
  );
};

export default Home;

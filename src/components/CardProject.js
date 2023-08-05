import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

const CardProject = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const cardContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const CardProjectDesktop = () => {
    return (
      <Box>
        <Container>
          {data.map((item, index) => (
            <Card key={index} sx={{ margin: "4%" }}>
              <CardContent height={"100%"}>
                <Grid
                  container
                  columns={20}
                  alignItems={"center"}
                  justifyItems={"center"}
                >
                  <Grid item xs align="center">
                    <Box>
                      <img
                        height={"225px"}
                        alt={item.title}
                        src={require(`../assets/images/${item.src_image}`)}
                        style={{
                          borderRadius: "3%",
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs>
                    <Typography variant="h4" align="center">
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: "5px" }}>
                      {item.description}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Box>
    );
  };

  const CardProjectMobile = () => {
    return (
      <Box>
        <Container>
          {data.map((item, index) => (
            <Card key={index} sx={{ width: "auto", margin: "2%" }}>
              <CardContent height={"100%"}>
                <Grid container direction={"column"} alignItems={"strech"}>
                  <Grid item xs align="center">
                    <img
                      width={"100%"}
                      alt={item.title}
                      src={require(`../assets/images/${item.src_image}`)}
                      style={{ borderRadius: "3%" }}
                    />
                  </Grid>

                  <Grid item xs mt={"2rem"}>
                    <Typography variant="h4" align="center">
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: "1.5rem" }}>
                      {item.description}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Box>
    );
  };

  if (isMobile) {
    return <CardProjectMobile />;
  } else {
    return <CardProjectDesktop />;
  }
};

export default CardProject;

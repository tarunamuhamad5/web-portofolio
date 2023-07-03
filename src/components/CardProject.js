import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const CardProject = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const CardProjectDesktop = () => {
    return (
      <React.Fragment>
        <Grid
          container
          columns={20}
          alignItems={"center"}
          height={"auto"}
          width={"100%"}
        >
          <Grid item xs={3}></Grid>

          <Grid item xs={14}>
            {/* Start Card Project */}
            {data.map((item, index) => (
              <div key={index}>
                <Card sx={{ height: "25vh", margin: "2%" }}>
                  <CardContent height={"100%"}>
                    <Grid container columns={20} alignItems={"strech"}>
                      <Grid item xs={7} align="center">
                        <Box background>
                          <div height={"auto"}>
                            <img
                              height={"225px"}
                              alt={item.title}
                              src={require(`../assets/images/${item.src_image}`)}
                              style={{ borderRadius: "3%" }}
                            />
                          </div>
                        </Box>
                      </Grid>

                      <Grid item xs={13}>
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
              </div>
            ))}
            {/* End Card Project */}
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </React.Fragment>
    );
  };

  const CardProjectMobile = () => {
    return (
      <React.Fragment>
        <Grid
          container
          columns={20}
          alignItems={"center"}
          height={"auto"}
          width={"100%"}
        >
          <Grid item xs={1}></Grid>

          <Grid item xs={18}>
            {/* Start Card Project */}
            {data.map((item, index) => (
              <div>
                <Card key={index} sx={{ width: "auto", margin: "2%" }}>
                  <CardContent height={"100%"}>
                    <Grid container direction={"column"} alignItems={"strech"}>
                      <Grid item xs={10} align="center">
                        <img
                          width={"100%"}
                          alt={item.title}
                          src={require(`../assets/images/${item.src_image}`)}
                          style={{ borderRadius: "3%" }}
                        />
                      </Grid>

                      <Grid item xs={10} mt={"2rem"}>
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
              </div>
            ))}
            {/* End Card Project */}
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </React.Fragment>
    );
  };

  if (isMobile) {
    return (
      <React.Fragment>
        <CardProjectMobile />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <CardProjectDesktop />
      </React.Fragment>
    );
  }
};

export default CardProject;

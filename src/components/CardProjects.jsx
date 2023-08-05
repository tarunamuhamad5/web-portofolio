import {
  Box,
  Card,
  Typography,
  styled,
  CardContent,
  Grid,
  Container,
} from "@mui/material";
import React from "react";

const CardProjects = ({ project }) => {
  const BoxCardProjects = styled(Container)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));

  const GridCardProjects = styled(Grid)(({ theme }) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));

  return (
    <BoxCardProjects>
      <Card sx={{ margin: "4%" }}>
        <CardContent height={"100%"}>
          <GridCardProjects container columns={20}>
            <Grid project xs align="center">
              <img
                width={"93%"}
                alt={project.title}
                src={require(`../assets/images/${project.src_image}`)}
                style={{
                  borderRadius: "3%",
                }}
              />
            </Grid>

            <Grid project xs>
              <Typography variant="h4" align="center">
                {project.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: "5px" }}>
                {project.description}
              </Typography>
            </Grid>
          </GridCardProjects>
        </CardContent>
      </Card>
    </BoxCardProjects>
  );
};

export default CardProjects;

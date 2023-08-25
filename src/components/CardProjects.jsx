import {
    Card,
    CardContent,
    Container,
    Grid,
    styled,
    Typography,
} from "@mui/material";
import React from "react";

const CardProjects = ({ project }) => {
    const BoxCardProjects = styled(Container)(({ theme }) => ({
        width: "100%",

        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
        },
    }));

    const CardProjects = styled(Card)(({ theme }) => ({
        margin: "2%",
        borderRadius: "1%",
        [theme.breakpoints.down("md")]: {
            margin: "3%",
            borderRadius: "5%",
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

    const TitleProject = styled(Typography)(({ theme }) => ({
        fontSize: "30px",
        fontWeight: "bold",
    }));
    const BodyProject = styled(Typography)(({ theme }) => ({
        fontSize: "18px",
        color: "#7E7676",
    }));

    return (
        <BoxCardProjects>
            <CardProjects>
                <CardContent>
                    <GridCardProjects container columns={20}>
                        <Grid project xs align="center">
                            <img
                                width={"95%"}
                                alt={project.title}
                                src={require(`../assets/images/${project.src_image}`)}
                                style={{
                                    borderRadius: "3%",
                                }}
                            />
                        </Grid>

                        <Grid project xs>
                            <TitleProject variant="h4" align="center">
                                {project.title}
                            </TitleProject>
                            <BodyProject variant="body1" sx={{ mt: "5px" }}>
                                {project.description}
                            </BodyProject>
                        </Grid>
                    </GridCardProjects>
                </CardContent>
            </CardProjects>
        </BoxCardProjects>
    );
};

export default CardProjects;

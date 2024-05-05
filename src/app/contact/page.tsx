"use client";
import { Typography, Box, styled, Container } from "@mui/material";

export default function Home() {
    const ContainerContent = styled(Container)(({ theme }) => ({
        textAlign: "center",
        [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    }));
    return (
        <Box
            minHeight={"92vh"}
            sx={{
                backgroundColor: "#F9F9F9",
                alignContent: "center",
            }}
        >
            <ContainerContent>
                <Typography variant="h2">Contact Under Construction</Typography>
            </ContainerContent>
        </Box>
    );
}

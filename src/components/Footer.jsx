// Footer.js
import React from "react";
import { Typography, Link, Box } from "@mui/material";

function Footer() {
    return (
        <Box sx={{ backgroundColor: "#F9F9F9" }}>
            <Typography variant="body2" color="textSecondary" align="center">
                Made with ❤️ by{" "}
                <Link href="https://muhamad-taruna.cloud">Taruna </Link>
                &copy; {new Date().getFullYear()}
            </Typography>
        </Box>
    );
}

export default Footer;

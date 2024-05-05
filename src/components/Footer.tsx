"use client";
import React from "react";
import { Typography, Link, Box } from "@mui/material";
import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter();
    return (
        <Box sx={{ backgroundColor: "#F9F9F9" }}>
            <Typography variant="body2" color="textSecondary" align="center">
                Made with ❤️ by{" "}
                <Link onClick={() => router.push("./")}>Muhammad Taruna</Link>
                &copy; {new Date().getFullYear()}
            </Typography>
        </Box>
    );
};

export default Footer;

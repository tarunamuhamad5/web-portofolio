"use client";
import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import "../styles/Header.css";
import { useRouter } from "next/navigation";

const Header = () => {
    const [isFloating, setIsFloating] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsFloating(true);
            } else {
                setIsFloating(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const NavbarContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(2.1),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(2),
        },
    }));

    const NavBarBox = styled(Box)(({ theme }) => ({
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: theme.spacing(3),
    }));

    const NavBarButton = styled(Typography)({
        fontSize: "18px",
        color: "black",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
            color: "red",
        },
    });

    const router = useRouter();

    return (
        <div>
            <div className={"floating-navbar"}>
                <NavbarContainer>
                    <NavBarBox>
                        <NavBarButton
                            variant="body2"
                            onClick={() => router.push("./")}
                        >
                            Home
                        </NavBarButton>
                        <NavBarButton
                            variant="body2"
                            onClick={() => router.push("./experience")}
                        >
                            Experience
                        </NavBarButton>
                        <NavBarButton
                            variant="body2"
                            onClick={() => router.push("./contact")}
                        >
                            Contact
                        </NavBarButton>
                        <NavBarButton
                            variant="body2"
                            onClick={() => router.push("./blog")}
                        >
                            Blog
                        </NavBarButton>
                    </NavBarBox>
                </NavbarContainer>
            </div>
        </div>
    );
};

export default Header;

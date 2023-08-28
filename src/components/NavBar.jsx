import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import "../style/NavBar.css";

const NavBar = () => {
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

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        const scrollPosition = element.offsetTop - 40; // Adjust the value as needed
        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
        });
    };

    return (
        <div className={"floating-navbar"}>
            <NavbarContainer>
                <NavBarBox>
                    <NavBarButton
                        variant="body2"
                        onClick={() => scrollToSection("Roles")}
                    >
                        Role
                    </NavBarButton>
                    <NavBarButton
                        variant="body2"
                        onClick={() => scrollToSection("Projects")}
                    >
                        Projects
                    </NavBarButton>
                    <NavBarButton
                        variant="body2"
                        onClick={() => scrollToSection("Contact")}
                    >
                        Contact
                    </NavBarButton>
                </NavBarBox>
            </NavbarContainer>
        </div>
    );
};

export default NavBar;

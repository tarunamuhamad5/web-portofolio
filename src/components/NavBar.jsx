import { Box, Button, Container, Typography, styled } from "@mui/material";
import React from "react";

const NavBar = () => {
  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
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
    <NavbarContainer>
      <NavBarBox>
        <NavBarButton variant="body2" onClick={() => scrollToSection("Roles")}>
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
  );
};

export default NavBar;

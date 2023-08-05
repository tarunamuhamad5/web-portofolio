import { Box, Typography, styled } from "@mui/material";
import React from "react";

const CardRoles = ({ role }) => {
  const BoxRoles = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    alignContent: "center",
    justifyContent: "center",
    maxWidth: "400",
    backgroundColor: "#fff",
    margin: theme.spacing(0, 3, 0, 3),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(3, 0, 3, 0),
    },
  }));

  return (
    <BoxRoles>
      <Box align={"center"} sx={{ width: "100%" }}>
        <img
          width={"200px"}
          alt={role.title}
          src={require(`../assets/images/${role.src_image}`)}
        />
      </Box>

      <Box>
        <Typography variant="h4" align="center" mt={"1rem"}>
          {role.title}
        </Typography>
        <Typography variant="body1" mt={"5px"} align="center">
          {role.body}
        </Typography>
      </Box>
    </BoxRoles>
  );
};

export default CardRoles;

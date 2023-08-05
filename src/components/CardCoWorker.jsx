import {
  Typography,
  Card,
  CardContent,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const CardCoWorker = ({ Word }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const CardWords = styled(Card)(({ theme }) => ({
    height: "auto",
    width: "68%",
    margin: "2%",
    [theme.breakpoints.down("md")]: {
      width: "93%",
    },
  }));
  return (
    <div align="center">
      <CardWords align="center">
        <CardContent>
          <Typography variant={isMobile ? "h5" : "h4"} align="center">
            {Word.name}
          </Typography>
          <Typography variant={isMobile ? "body2" : "body2"} mt={"1rem"}>
            {Word.message}
          </Typography>
        </CardContent>
      </CardWords>
    </div>
  );
};

export default CardCoWorker;

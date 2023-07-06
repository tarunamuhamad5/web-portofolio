import {
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import React from "react";

const CardWords = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const renderCardsDekstop = () => {
    return (
      <div style={{ display: "flex" }}>
        {data.map((item, index) => (
          <Card
            key={index}
            sx={{
              height: "auto",
              width: "40%",
              margin: "1%",
            }}
          >
            <CardContent>
              <div align="center">
                <Typography variant="h2">{item.name}</Typography>
                <Typography variant="body1">{item.message}</Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return <div>{renderCardsDekstop()}</div>;
};

export default CardWords;

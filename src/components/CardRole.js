import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  useMediaQuery,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";

const CardRole = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const renderCardsMobile = () => {
    return (
      <SwipeableViews enableMouseEvents>
        {data.map((item, index) => (
          <div key={index}>
            <Card
              key={index}
              sx={{
                height: "30vh",
                margin: "2%",
              }}
            >
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" mt={"10px"}>
                  {item.body}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </SwipeableViews>
    );
  };

  const renderCardsDekstop = () => {
    return (
      <div style={{ display: "flex" }}>
        {data.map((item, index) => (
          <Card
            key={index}
            sx={{
              height: "22vh",
              margin: "2%",
            }}
          >
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2" mt={"10px"}>
                {item.body}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  if (isMobile) {
    return <div>{renderCardsMobile()}</div>;
  } else {
    return <div>{renderCardsDekstop()}</div>;
  }
};

export default CardRole;

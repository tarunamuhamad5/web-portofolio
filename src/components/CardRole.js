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

  const renderCards = () => {
    if (isMobile) {
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
    } else {
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
    }
  };

  return <div>{renderCards()}</div>;
};

export default CardRole;

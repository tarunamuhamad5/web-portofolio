import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  useMediaQuery,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const CardWords = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const renderCardsDekstop = () => {
    return (
      <React.Fragment>
        <AutoPlaySwipeableViews enableMouseEvents interval={3000}>
          {data.map((item, index) => (
            <Card
              key={index}
              sx={{
                height: "auto",
                margin: "1%",
              }}
            >
              <CardContent>
                <div align="center">
                  <Typography variant={isMobile ? "h4" : "h3"}>
                    {item.name}
                  </Typography>
                  <Typography
                    mt={"1rem"}
                    variant={isMobile ? "body2" : "body1"}
                  >
                    {item.message}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          ))}
        </AutoPlaySwipeableViews>
      </React.Fragment>
    );
  };

  return <div>{renderCardsDekstop()}</div>;
};

export default CardWords;

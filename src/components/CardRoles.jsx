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

const CardRoles = ({ DataRoles }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const renderCardsMobile = () => {
    return (
      <React.Fragment>
        <AutoPlaySwipeableViews enableMouseEvents interval={1500}>
          {DataRoles.map((item, index) => (
            <div>
              <Card
                key={index}
                variant="naked"
                sx={{
                  width: "auto",
                  margin: "1%",
                  mt: "20px",
                }}
              >
                <CardContent>
                  <div align="center">
                    <img
                      height={"160px"}
                      alt={item.title}
                      src={require(`../assets/images/${item.src_image}`)}
                    />
                  </div>
                  <div>
                    <Typography variant="h4" align="center" mt={"1rem"}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" mt={"5px"} align="center">
                      {item.body}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </React.Fragment>
    );
  };

  const renderCardsDekstop = () => {
    return (
      <div style={{ display: "flex" }}>
        {DataRoles.map((item, index) => (
          <Card
            key={index}
            variant="naked"
            sx={{
              height: "auto",
              width: "40%",
              margin: "1%",
            }}
          >
            <CardContent>
              <div align="center">
                <img
                  width={"200px"}
                  alt={item.title}
                  src={require(`../assets/images/${item.src_image}`)}
                />
              </div>
              <div>
                <Typography variant="h5" align="center">
                  {item.title}
                </Typography>
                <Typography variant="body1" mt={"10px"} align="center">
                  {item.body}
                </Typography>
              </div>
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

export default CardRoles;

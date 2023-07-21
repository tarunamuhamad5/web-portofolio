import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Card, CardContent, Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const CardContact = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const renderCardsDekstop = () => {
    const handleImageClick = (url) => {
      window.open(url, "_blank");
    };
    return (
      <div style={{ display: "flex" }}>
        {data.map((item, index) => (
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
                  height={"125px"}
                  style={{ marginTop: "1rem" }}
                  background={"white"}
                  src={require(`../assets/images/${item.icon}`)}
                  onClick={() => handleImageClick(item.link)}
                />
                <Typography variant="body1" mt={"1rem"}>
                  {item.contact}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderCardsMobile = () => {
    const handleImageClick = (url) => {
      window.open(url, "_blank");
    };
    return (
      <div style={{ display: "flex" }}>
        {data.map((item, index) => (
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
                  height={"60px"}
                  style={{ marginTop: "1rem" }}
                  background={"white"}
                  src={require(`../assets/images/${item.icon}`)}
                  onClick={() => handleImageClick(item.link)}
                />
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

export default CardContact;

import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  useMediaQuery,
  Typography,
  Card,
  CardContent,
  styled,
  Box,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const CardRoles = ({ DataRoles }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const RoleTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: "20px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "30px",
    },
  }));

  const RoleBody = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    color: "#7E7676",
    [theme.breakpoints.down("lg")]: {},
  }));

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
                    <RoleTitle variant="h4" align="center" mt={"1rem"}>
                      {item.title}
                    </RoleTitle>
                    <RoleBody variant="body1" mt={"5px"} align="center">
                      {item.body}
                    </RoleBody>
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
      <Box style={{ display: "flex" }} justifyContent="center">
        {DataRoles.map((item, index) => (
          <Card
            key={index}
            variant="naked"
            sx={{
              height: "auto",
              width: "20%",
              margin: "1%",
            }}
          >
            <CardContent>
              <div align="center">
                <img
                  width={"160px"}
                  alt={item.title}
                  src={require(`../assets/images/${item.src_image}`)}
                />
              </div>
              <div>
                <RoleTitle variant="h5" align="center">
                  {item.title}
                </RoleTitle>
                <RoleBody variant="body1" mt={"10px"} align="center">
                  {item.body}
                </RoleBody>
              </div>
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  };

  if (isMobile) {
    return <div>{renderCardsMobile()}</div>;
  } else {
    return <div>{renderCardsDekstop()}</div>;
  }
};

export default CardRoles;

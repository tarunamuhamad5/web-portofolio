import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Typography, Card, CardContent } from "@mui/material";

const CardRole = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const renderCardsMobile = () => {
    return (
      <React.Fragment>
        {data.map((item, index) => (
          <div>
            <Card
              key={index}
              sx={{
                width: "auto",
                margin: "1%",
                mt: "20px",
              }}
            >
              <CardContent>
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body1" mt={"10px"}>
                  {item.body}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </React.Fragment>
    );
  };

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
              <Typography variant="h5" align="center">
                {item.title}
              </Typography>
              <Typography variant="body1" mt={"10px"}>
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

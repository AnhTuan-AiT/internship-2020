import React from "react";
import { Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";

function Welcome() {
  const location = useLocation();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Typography variant="h1" style={{ paddingTop: 250 }}>
        Xin chào {location.state.userName}
      </Typography>
    </div>
  );
}

export default Welcome;

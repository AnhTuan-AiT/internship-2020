import React from "react";
import {
  Button,
  Card,
  Box,
  CardActionArea,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import { AuthContext } from "../App";

const useStyles = makeStyles((theme) => ({
  media: {
    height: window.innerHeight * 0.83,
    backgroundSize: "contain",
    width: "100%",
  },
  card: {
    width: "100%",
  },
}));

function Welcome() {
  const { dispatch } = React.useContext(AuthContext);

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Box alignItems={"flex-start"}>
        <CardMedia
          image={
            "https://i1-vnexpress.vnecdn.net/2019/07/16/Bk-9946-1563270717.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=6GK6bi4wxe_wfdHqdxkLGg"
          }
          className={classes.media}
        />
      </Box>
    </Card>
  );
}

export default Welcome;

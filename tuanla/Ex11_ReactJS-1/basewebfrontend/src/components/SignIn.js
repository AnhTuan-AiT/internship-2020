import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosPost } from "../api";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        T
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    //backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(12),
    height: theme.spacing(8),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const history = useHistory();
  const classes = useStyles();
  const [isRequesting, setIsRequesting] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsRequesting(true);

    let account = {
      userName: userName,
      password: password,
    };

    axiosPost("account/login", account)
      .then((res) => {
        if (res.data === "Authenticated") {
          history.push({
            pathname: "/welcome",
            state: { userName: userName },
          });
        } else {
          setError("Tên người dùng hoặc mật khẩu không chính xác");
          setIsRequesting(false);
        }
      })
      .catch((e) => {
        setIsRequesting(false);
        console.log(e);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img
        //alt="Hust"
        //className={classes.avatar}
        //src={process.env.PUBLIC_URL + "/soict-logo.png"}
        />
        <Typography component="h1" variant="h4">
          Đăng nhập
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          {error !== "" ? (
            <Box fullWidth justifyContent="center" display="flex">
              <Box>
                <Typography variant="overline" color="error">
                  {error}
                </Typography>
              </Box>
            </Box>
          ) : (
            ""
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="user"
            label="User Name"
            name="user"
            onChange={handleUserNameChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handlePasswordChange}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {isRequesting === true ? (
            <Button
              disabled={true}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <CircularProgress /> Đăng nhập
            </Button>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Đăng nhập
            </Button>
          )}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Quên mật khẩu?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href={process.env.PUBLIC_URL + "/user/register"}
                variant="body2"
              >
                {"Chưa có tài khoản? Đăng ký"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

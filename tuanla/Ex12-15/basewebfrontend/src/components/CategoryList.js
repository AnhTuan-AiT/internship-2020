import React, { useState, useEffect } from "react";
import {
  MuiThemeProvider,
  Card,
  Grid,
  Box,
  CardMedia,
  CardActionArea,
  makeStyles,
  IconButton,
  Tooltip,
  Typography,
  Button,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { axiosGet } from "../api";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import Paginator from "./Paginator";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  media: {
    height: 56,
    backgroundSize: "contain",
    maxHeight: "100%",
    width: "100%",
  },
  card: {
    width: "100%",
  },
  cardActionArea: {
    height: 100,
  },
}));

function CategoryList() {
  const classes = useStyles();
  const history = useHistory();

  const [totalPages, setTotalPages] = useState(1);
  const [categories, setCategories] = useState([]);

  // Functions.
  const getCategories = (pageNumber) => {
    axiosGet(`admin/categories?pageNumber=${pageNumber}`)
      .then((res) => {
        let categories = res.data.content;
        let createdStamp;
        let lastUpdatedStamp;

        for (let i = 0; i < categories.length; i++) {
          createdStamp = new Date(categories[i]["createdStamp"]);
          lastUpdatedStamp =
            categories[i]["lastUpdatedStamp"] === null
              ? null
              : new Date(categories[i]["lastUpdatedStamp"]);

          categories[i] = {
            ...categories[i],

            createdStamp: `${("0" + createdStamp.getDate()).slice(-2)}/${(
              "0" +
              (createdStamp.getMonth() + 1)
            ).slice(-2)}/${createdStamp.getFullYear()}`,
            lastUpdatedStamp:
              lastUpdatedStamp === null
                ? null
                : `${("0" + lastUpdatedStamp.getDate()).slice(-2)}/${(
                    "0" +
                    (lastUpdatedStamp.getMonth() + 1)
                  ).slice(-2)}/${lastUpdatedStamp.getFullYear()}`,
          };
        }

        setTotalPages(res.data.totalPages);
        setCategories(categories);
      })
      .catch((e) => console.log(e));
  };

  const onClickPage = (page) => {
    console.log("click page ", page);
    getCategories(page - 1);
  };

  const onClickCard = (categoryId) => {
    let c = categories.find((c) => c.categoryId === categoryId);
    console.log(c);
    history.push({
      pathname: "/category/detail",
      state: {
        category: c,
      },
    });
  };

  useEffect(() => {
    getCategories(0);
  }, []);

  return (
    <div>
      <MuiThemeProvider>
        <Grid container justify="center">
          <Grid item lg={8} sm={8}>
            <Grid
              container
              spacing={2}
              justify="flex-start"
              style={{ minHeight: 250 }}
            >
              <Typography variant="h6" noWrap>
                Các thương hiệu sản phẩm:
              </Typography>
              <Box
                display="flex"
                width="60%"
                justifyContent="flex-end"
                style={{ marginBottom: 100 }}
              >
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/category/create")}
                  >
                    Click em đi :))
                  </Button>
                </Box>
              </Box>

              {categories.map((category) => (
                <Grid item lg={4} sm={8} key={category.categoryId}>
                  <Card className={classes.card}>
                    <Box alignItems={"flex-start"}>
                      <CardActionArea
                        value={category.categoryId}
                        className={classes.cardActionArea}
                        onClick={(e) =>
                          onClickCard(Number(e.currentTarget.value))
                        }
                      >
                        <CardMedia
                          image={category.link}
                          className={classes.media}
                        />
                      </CardActionArea>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box width="100%" display="flex" justifyContent="flex-end">
              <Box style={{ paddingTop: 50 }}>
                <Paginator
                  onClickPage={onClickPage}
                  totalPages={totalPages}
                  noPages={3}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default CategoryList;

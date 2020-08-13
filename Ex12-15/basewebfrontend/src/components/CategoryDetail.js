import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import {
  Typography,
  MuiThemeProvider,
  Grid,
  Card,
  CardContent,
  makeStyles,
  Box,
  CardMedia,
  Button,
} from "@material-ui/core";
import { axiosGet } from "../api";
import Paginator from "./Paginator";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  media: {
    height: 300,
    backgroundSize: "contain",
    maxHeight: "100%",
    width: "100%",
  },
  card: {
    width: "100%",
  },
}));

function CategoryDetail() {
  const history = useHistory();
  let location = useLocation();
  const classes = useStyles();

  const category = location.state.category;
  const [totalPages, setTotalPages] = useState(1);
  const [products, setProducts] = useState([]);

  const getProducts = (pageNumber) => {
    axiosGet(
      `admin/categories/products?categoryId=${category.categoryId}&pageNumber=${pageNumber}`
    )
      .then((res) => {
        setTotalPages(res.data.totalPages);
        setProducts(res.data.content);
      })
      .catch((e) => console.log(e));
  };

  const onClickPage = (page) => {
    console.log("click page ", page);
    getProducts(page - 1);
  };

  useEffect(() => {
    getProducts(0);
  }, []);

  return (
    <div>
      <MuiThemeProvider>
        <Grid container justify="center">
          <Grid item lg={10}>
            <Card style={{ minHeight: window.innerHeight }}>
              <CardContent>
                <Box
                  display="flex"
                  width="100%"
                  justifyContent="flex-start"
                  style={{ marginBottom: 50 }}
                >
                  <Box width="70%">
                    <Typography variant="h4">
                      Chi tiết danh mục: {category.categoryName}
                    </Typography>
                  </Box>
                  <Box width="20%">
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() =>
                        history.push({
                          pathname: "/category/edit",
                          state: { category: category },
                        })
                      }
                    >
                      Sửa
                    </Button>
                  </Box>
                </Box>
                <br />
                <Typography>
                  <b>Tên danh mục:</b> {category.categoryName}
                </Typography>
                <br />
                <Typography>
                  <b>Ngày tạo:</b> {category.createdStamp}
                </Typography>
                <br />
                <Typography>
                  <b>Lần cập nhật cuối:</b> {category.lastUpdatedStamp}
                </Typography>
                <br />
                <Typography>
                  <b>Giới thiệu:</b> {category.description}
                </Typography>
                <br />
                <Typography>
                  <b>Các sản phẩm:</b>
                </Typography>
                <br />

                {products.length > 0 ? (
                  <Grid container justify="center">
                    <Grid item lg={10} sm={8}>
                      <Grid
                        container
                        spacing={2}
                        justify="flex-start"
                        style={{ minHeight: 250 }}
                      >
                        {products.map((product) => (
                          <Grid item lg={4} sm={8} key={product.productId}>
                            <Card className={classes.card}>
                              <Box alignItems={"flex-start"}>
                                <CardMedia
                                  image={product.link}
                                  className={classes.media}
                                />
                                <CardContent>
                                  <Typography variant="subtitle2">
                                    {product.productName}
                                  </Typography>
                                </CardContent>
                              </Box>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                      <Box
                        width="100%"
                        display="flex"
                        justifyContent="flex-end"
                      >
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
                ) : null}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default CategoryDetail;

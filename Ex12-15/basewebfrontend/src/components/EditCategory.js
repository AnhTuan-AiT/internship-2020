import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { Save, Cancel } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";
import { axiosPut } from "../api";

function EditCategory() {
  const history = useHistory();
  let location = useLocation();

  const category = location.state.category;
  const [categoryName, setCategoryName] = useState(category.categoryName);
  const [description, setDescription] = useState(category.description);
  const [link, setLink] = useState(category.link);

  const onClickCancelButton = () => {
    history.goBack();
  };

  const onSubmit = () => {
    console.log("submit");
    axiosPut(`admin/categories/${category.categoryId}`, {
      categoryName: categoryName,
      link: link,
      description: description,
    })
      .then((res) => {
        history.goBack();
      })
      .catch((e) => console.log(e));
  };

  return (
    <form onSubmit={onSubmit} style={{ marginLeft: 30 }}>
      <Typography variant="h4">Cập nhật danh mục</Typography>
      <br />
      <TextField
        required
        value={categoryName}
        label="Tên danh mục"
        onChange={(e) => setCategoryName(e.target.value)}
        style={{ width: 300 }}
      />
      <br />
      <br />
      <TextField
        required
        value={link}
        label="Ảnh"
        onChange={(e) => setLink(e.target.value)}
        style={{ width: 300 }}
      />
      <br />
      <br />
      <TextField
        required
        multiline
        rows={5}
        variant="outlined"
        value={description}
        label="Giới thiệu"
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: 600 }}
      />
      <br />
      <br />
      <Button
        variant="contained"
        size="medium"
        color="primary"
        startIcon={<Cancel />}
        onClick={onClickCancelButton}
        style={{
          background: "grey",
          color: "white",
          marginRight: 10,
        }}
      >
        HỦY
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        startIcon={<Save />}
        type="submit"
      >
        LƯU
      </Button>
    </form>
  );
}

export default EditCategory;

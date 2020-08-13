import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import CategoryDetail from "./components/CategoryDetail";
import Welcome from "./components/Welcome";
import CreateCategory from "./components/CreateCategory";
import EditCategory from "./components/EditCategory";

function Routes(props) {
  return (
    <Switch>
      <Route path="/" exact>
        <Welcome />
      </Route>
      <Route path="/category" exact>
        <CategoryList />
      </Route>
      <Route path="/category/detail" exact>
        <CategoryDetail />
      </Route>
      <Route path="/category/create" exact>
        <CreateCategory />
      </Route>
      <Route path="/category/edit" exact>
        <EditCategory />
      </Route>
    </Switch>
  );
}

export default Routes;

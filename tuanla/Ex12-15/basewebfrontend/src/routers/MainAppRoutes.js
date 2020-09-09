import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import { updateSelectedFuction } from "../action";
import PrivateRoute from "../common/PrivateRoute";
import Home from "../components/Home";

import Loading from "../component/common/Loading";
import { mapPathMenu } from "../config/menuconfig";
import { Layout } from "../layout";
import CategoryList from "./components/CategoryList";
import CategoryDetail from "./components/CategoryDetail";

function MainAppRoute(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "")
      dispatch(updateSelectedFuction(null));
    let selectedFunction = mapPathMenu.get(location.pathname);
    if (selectedFunction !== undefined && selectedFunction !== null)
      dispatch(updateSelectedFuction(selectedFunction));
  }, [location]);
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateRoute component={Home} layout={Layout} exact path="/" />

          <PrivateRoute
            component={CategoryList}
            layout={Layout}
            exact
            path="/category"
          />

          <PrivateRoute
            component={CategoryDetail}
            layout={Layout}
            exact
            path="/category/detail"
          />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default MainAppRoute;

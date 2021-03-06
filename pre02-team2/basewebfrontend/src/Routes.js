import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";
import Loading from "./component/common/Loading";
import ChangePassword from "./component/userlogin/ChangePassword";
import Register from "./component/userregister/Register";
import SignInContainer from "./container/SignInContainer";
import { Layout } from "./layout";
import MainAppRoute from "./routers/MainAppRoutes";
import Error500 from "./component/common/Error500";

function Routes(props) {
  const isError = useSelector((state) => state.error.isError);
  if (isError) return <Route component={Error500} path="*" />;
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route component={Register} layout={Layout} path="/user/register" />
        <PrivateRoute
          component={ChangePassword}
          path="/userlogin/change-password/:username"
        />
        <Route component={SignInContainer} path="/login" />
        <PrivateRoute component={MainAppRoute} path="*" />
      </Switch>
    </Suspense>
  );
}

export default Routes;

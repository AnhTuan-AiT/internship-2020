import React from "react";
import {Route, Switch, useRouteMatch} from "react-router";


export default function ProductGroupRoute() {
  let {path, url} = useRouteMatch();
  return (
    <div>
      <Switch>
        {/* <Route component={AddProductImg} path={`${path}/product-add-img/:productId`}/>
        <Route component={SetPrimaryImg} path={`${path}/set-product-primary-img/:productId`}/>
        <Route component={ProductEdit} path={`${path}/product-edit/:productId`}/>
        <Route component={ProductPriceCreate} path={`${path}/create-product-price/:productId`}/>
        <Route component={ProductPriceSupplier} path={`${path}/product-price-supplier/list`}/> */}
      </Switch>
    </div>
  );
}

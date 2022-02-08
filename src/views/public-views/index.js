import React, { Suspense,lazy } from "react";
import { Route, Switch } from "react-router-dom";
import {PUBLIC_PREFIX_PATH} from "configs/AppConfigs";
import Loader from "components/Loader";

const PublicViews = () => {
  return (
    <>
      <Suspense fallback={<Loader/>}>
          <Switch>
            <Route path={`/${PUBLIC_PREFIX_PATH}/signin`} component={lazy(()=>import('./SignIn'))} />
            <Route path={`/${PUBLIC_PREFIX_PATH}/signup`} component={lazy(()=>import('./SignUp'))} />
          </Switch>
      </Suspense>
    </>
  );
};

export default PublicViews;

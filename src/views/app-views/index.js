import React, { Suspense,lazy } from "react";
import { Route, Switch } from "react-router-dom";
import {APP_PREFIX_PATH} from "configs/AppConfigs";
import Loader from "components/Loader";

const AppViews = () => {
  return (
    <>
      <Suspense fallback={<Loader/>}>
          <Switch>
            <Route path={`/${APP_PREFIX_PATH}/leaderboards`} component={lazy(()=>import('./leaderboards'))} />
            <Route path={`/${APP_PREFIX_PATH}/profile`} component={lazy(()=>import('./profile'))} />
            <Route path={`/${APP_PREFIX_PATH}/detailboards`} component={lazy(()=>import('./detailboards'))} />
            <Route exact path={`/${APP_PREFIX_PATH}/roster`} component={lazy(()=>import('./Roster'))} />
            <Route exact path={`/${APP_PREFIX_PATH}/roster/search`} component={lazy(()=>import('./rosterSearch'))} />
            <Route exact path={`/${APP_PREFIX_PATH}/versus`} component={lazy(()=>import('./versus'))} />
            <Route exact path={`/${APP_PREFIX_PATH}/versus/game/:id`} component={lazy(()=>import('./gameboard'))} />
            <Route exact path={`/${APP_PREFIX_PATH}/faq`} component={lazy(()=>import('./faq'))} />
          </Switch>
      </Suspense>
    </>
  );
};

export default AppViews;
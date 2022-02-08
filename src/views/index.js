import { Route, Switch, Redirect } from "react-router-dom";
import { PUBLIC_PREFIX_PATH, APP_PREFIX_PATH } from "configs/AppConfigs";
import PublicViews from "./public-views";
import AppLayout from "layouts/app-layouts";

const Views = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to={`/${PUBLIC_PREFIX_PATH}`} />
        </Route>
        <Route path={`/${PUBLIC_PREFIX_PATH}`} component={PublicViews} />
        <Route path={`/${APP_PREFIX_PATH}`}>
          <AppLayout />
        </Route>
      </Switch>
    </>
  );
};

export default Views;

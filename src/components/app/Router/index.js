import React from "react";
import { Switch, HashRouter,Route } from "react-router-dom";
import { authR, protectedR, publicR } from "./routes";
import ScrollToTop from "./routes/validators/ScrollToTop";

import {
  createRoutesAuth,
  createRoutesProtected,
  createRoutesPublic,
} from "./routes/validators/routeGenerators";

// import NotFound from "components/NotFound";
import Root from "components/pages/Root"
import Home from "components/pages/Home";

function AppRouter() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Root} />
        <Route  path="/page2" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default AppRouter;

import React, { Suspense } from "react";
import { Route, Link, Switch } from "react-router-dom";

import SimpleExampleHooks from "./simple-example-hooks";
import HooksTypes from "./hooks-types";

const createLink = (match, link, text) => (
  <li>
    <Link to={`${match.url}/${link}`}>{text}</Link>
  </li>
);

function HookWrapper({ match }) {
  return (
    <Suspense fallback={<div>loading.....</div>}>
      <ul>
        {createLink(match, 'simple-example-hooks', 'simple-example-hooks')}
        {createLink(match, 'other-type-hooks', 'other-type-hooks')}
      </ul>
      <br />
      <Switch>
        <Route
          path={`${match.path}/simple-example-hooks`}
          component={SimpleExampleHooks}
        />
        <Route path={`${match.path}/other-type-hooks`} component={HooksTypes} />
      </Switch>
    </Suspense>
  );
}

export default HookWrapper;

import React, { Suspense } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import SimpleExampleHooks from './simple-example-hooks';
import HooksTypes from './hooks-types';

function HookWrapper({ match }) {
  return (
    <Suspense fallback={<div>loading.....</div>}>
      <ul>
        <li>
          <Link to={`${match.url}/simple-example-hooks`}>
            simple-example-hooks
          </Link>
        </li>
      </ul>
      <br />
      <Switch>
        <Route
          path={`${match.path}/simple-example-hooks`}
          component={SimpleExampleHooks}
        />
      </Switch>
    </Suspense>
  );
}

export default HookWrapper;

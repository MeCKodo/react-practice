import React, { lazy, Suspense } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

const Home = lazy(() => import('./home'));

const About = () => <h2>About</h2>;

const Topics = lazy(() => import('./topics'));

const BasicExample = ({ match }) => {
  console.log(match);
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/`}>Home</Link>
        </li>
        <li>
          <Link to={`${match.url}/about`}>About</Link>
        </li>
        <li>
          <Link to={`${match.url}/topics`}>Topics</Link>
        </li>
      </ul>

      <hr />
      <Suspense fallback={<div>loading.....</div>}>
        <Switch>
          <Route exact path={`${match.path}/`} component={Home} />
          <Route path={`${match.path}/about`} component={About} />
          <Route path={`${match.path}/topics`} component={Topics} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default BasicExample;

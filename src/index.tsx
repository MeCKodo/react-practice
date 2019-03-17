import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './index.css';

import logo from './logo.svg';
// import BasicExample from './basic-example';
// import MaterialExample from './material-example';
document.addEventListener('touchstart', function() {});
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const BasicExample = lazy(() => import('./basic-example'));
const MaterialExample = lazy(() => import('./material-example'));
const HooksExample = lazy(() => import('./hooks-example'));

const createLink = (to: strig, text: string) => (
  <Link to={to}>
    <p>{text}</p>
  </Link>
);

ReactDOM.render(
  <BrowserRouter>
    <Container>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/basic" render={props => <BasicExample {...props} />} />
          <Route
            path="/material"
            render={props => <MaterialExample {...props} />}
          />
          <Route path="/hooks" render={props => <HooksExample {...props} />} />
          <Route
            path="/"
            render={() => (
              <React.Fragment>
                <h2>看什么看，写点demo不行吗</h2>
                {createLink('/basic', 'basic')}
                {createLink('/material', 'Material')}
                {createLink('/hooks', 'hooks')}
              </React.Fragment>
            )}
          />
        </Switch>
      </Suspense>
    </Container>
  </BrowserRouter>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import './index.css';
import BasicExample from './basic-example/index';

const BasicLink = () => <Link to={'/basic'}>Basic</Link>;

ReactDOM.render(
  <BrowserRouter>
    <div>
      <h2>路由Demo</h2>
      <BasicLink />
      <Switch>
        <Route path='/basic' component={BasicExample} />
        <Route path='/' render={() => <h3>请选择一个想要看的例子</h3>} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import styled from 'styled-components';
import './index.css';
import BasicExample from './basic-example/index';
import MaterialExample from './material-example';
import Icon from './material-example/LeftIcon';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const BasicLink = () => <Link to={'/basic'}><p>Basic</p></Link>;
const MaterialLink = () => <Link to={'/material'}><p>Material</p></Link>;

ReactDOM.render(
  <BrowserRouter >
    <Container>
      
      <Switch>
        <Route path='/basic' component={BasicExample} />
        <Route path='/material'  component={MaterialExample} />
        <Route path='/' render={() =>
          <React.Fragment>
            <Icon />
            <h2>看什么看，写点demo不行吗</h2>
            <BasicLink />
            <MaterialLink />
          </React.Fragment>
        } />
      </Switch>
    </Container>
  </BrowserRouter>,
  document.getElementById('root')
);

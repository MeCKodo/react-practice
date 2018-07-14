import React from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

const Home = () => <h2>Home</h2>;

const About = () => <h2>About</h2>;

const Topic = ({ match }) => <h3>{match.params.topicId}</h3>;

const Topics = ({ match }) => {
  console.log(match);
  
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
    
      <Route path={`${match.path}/:topicId`} component={Topic}/>
      <Route exact path={match.path} render={() => (
        <h3>Please select a topic.</h3>
      )}/>
    </div>
  )
};

const BasicExample = ({ match }) => {
  console.log(match);
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to={`${match.url}/`}>Home</Link></li>
          <li><Link to={`${match.url}/about`} >About</Link></li>
          <li><Link to={`${match.url}/topics`} >Topics</Link></li>
        </ul>
      
        <hr/>
      
        <Route exact path={`${match.path}/`} component={Home}/>
        <Route path={`${match.path}/about`} component={About}/>
        <Route path={`${match.path}/topics`} component={Topics}/>
      </div>
    </BrowserRouter>
  )
};

export default BasicExample
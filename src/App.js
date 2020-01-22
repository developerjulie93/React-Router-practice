import React from 'react';
import Home from './Home';
import About from './About';
import {Route, Link} from 'react-router-dom';
import Profile from './Profile';

const App =()=>{
  return(
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile/Developer">Juhee's profile</Link>
        </li>
        <li>
          <Link to="/profile/Guardian">Jihoon's profile</Link>
        </li>
      </ul>
      <hr />
      <Route path ="/" component ={Home} exact={true} />
      <Route path ="/about" component ={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
};
export default App;
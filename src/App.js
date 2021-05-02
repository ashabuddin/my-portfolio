
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './componemts/Home/Home';
import Navbar from './componemts/Navbar/Navbar';
import AboutMe from './componemts/AboutMe/AboutMe';
import Blog from './componemts/Blog/Blog';
import Contact from './componemts/Contact/Contact';
import Project from './componemts/Project/Project';

function App() {
  return (
    <Router>
      <Navbar/>
       <Switch>
           
          <Route exact path='/'>
              <Home/>
          </Route>
          <Route path='/aboutMe'>
             <AboutMe/>
          </Route>
          <Route path='/project'>
             <Project/>
          </Route>
          <Route path='/blog'>
             <Blog/>
          </Route>
          <Route path='/contact'>
             <Contact/>
          </Route>
       </Switch>
    </Router>
  );
}

export default App;

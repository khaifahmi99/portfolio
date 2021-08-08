import './App.css';

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import Academics from './components/Academics';
import ContactPage from './components/ContactPage';
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage';
import React from 'react';
import SingleProjectPage from './components/SingleProjectPage';
import { shouldSeeAcademics } from './config/visibility';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route
            path="/project/:id"
            render={(props) => <SingleProjectPage {...props} />}
          />
          <Route path="/contact">
            <ContactPage />
          </Route>
          {shouldSeeAcademics() && (
            <Route path="/academics">
              <Academics />
            </Route>
          )}
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

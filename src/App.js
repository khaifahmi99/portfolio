import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage';
import SingleProjectPage from './components/SingleProjectPage';
import ContactPage from './components/ContactPage';
import Academics from './components/Academics';
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
          <Route path="/project/:id" render={(props) => <SingleProjectPage {...props} />}/>
          <Route path="/contact">
            <ContactPage />
          </Route>
          {shouldSeeAcademics() && (
          <Route path="/academics">
            <Academics />
          </Route>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage';
import SingleProjectPage from './components/SingleProjectPage';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;

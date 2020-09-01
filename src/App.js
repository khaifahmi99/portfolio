import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage';
import SingleProjectPage from './components/SingleProjectPage';
import ContactPage from './components/ContactPage';
import Gallery from './components/GalleryPage';
import SingleGalleryPage from './components/SingleGalleryPage';

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
          <Route path="/galleries">
            <Gallery />
          </Route>
          <Route path="/gallery/:id" render={(props) => <SingleGalleryPage {...props} />}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

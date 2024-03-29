import React from 'react';
import M from 'materialize-css';

import '../styles/navbar.css';
import { shouldSeeAcademics } from '../config/visibility';

export default class Navbar extends React.Component {
  componentDidMount() {
    M.Sidenav.init(this.sidenav);
  }

  render() {
    return (
      <>
        <div className="navbar-fixed">
          <nav className="black">
            <div className="nav-wrapper">
              <div className="row">
                <div className="col s4">
                  <a
                    href="/"
                    className="brand-logo hide-on-med-and-down"
                    style={{ paddingLeft: '24px', fontFamily: 'comic sans ms' }}
                  >
                    KHAI FAHMI.
                  </a>
                  <a
                    href="/"
                    className="brand-logo center-align hide-on-large-only"
                    style={{ fontFamily: 'comic sans ms' }}
                  >
                    KHAI FAHMI.
                  </a>
                  <button
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                      border: 'none',
                    }}
                    data-target="mobile-demo"
                    className="sidenav-trigger hide-on-large-only"
                  >
                    <i className="material-icons">menu</i>
                  </button>
                </div>
                <ul
                  className="right hide-on-med-and-down"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  <li>
                    <a href="/projects">Projects</a>
                  </li>
                  {shouldSeeAcademics() && (
                    <li>
                      <a href="/academics">Academics</a>
                    </li>
                  )}
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <ul
          className="sidenav"
          id="mobile-demo"
          ref={(sidenav) => {
            this.sidenav = sidenav;
          }}
          style={{ fontFamily: 'Montserrat' }}
        >
          <li>
            <a href="/projects">Projects</a>
          </li>
          {shouldSeeAcademics() && (
            <li>
              <a href="/academics">Academics</a>
            </li>
          )}
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </>
    );
  }
}

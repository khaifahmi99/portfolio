import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'dev',
    };
  }

  render() {
    if (this.state.stage === 'prod') {
      return (
        <footer className="page-footer black">
          <div className="container">
            <div className="row">
              <div className="col l6 s12 left-align">
                <h5 className="white-text center-align">Khai Fahmi</h5>
                <ul className="fa-ul hide-on-med-and-down">
                  <li>
                    <i className="fa-li fa fa-phone fa-lg" aria-hidden="true" />{' '}
                    : (+61) 4 0104 3474
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-envelope fa-lg"
                      aria-hidden="true"
                    />{' '}
                    : khaifahmi99@gmail.com
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-linkedin fa-lg"
                      aria-hidden="true"
                    />{' '}
                    : https://www.linkedin.com/in/khaifahmi/
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-github fa-lg"
                      aria-hidden="true"
                    />{' '}
                    : https://github.com/khaifahmi99
                  </li>
                </ul>
                <div className="hide-on-large-only center-align">
                  <div className="col s3">
                    <button>
                      <i
                        className="fa fa-phone fa-lg white-text"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="col s3">
                    <button>
                      <i
                        className="fa fa-envelope fa-lg white-text"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="col s3">
                    <button>
                      <i
                        className="fa fa-linkedin fa-lg white-text"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="col s3">
                    <button>
                      <i
                        className="fa fa-github fa-lg white-text"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <br />
                </div>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Projects</h5>
                <ul>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Data Science
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Internet of Things
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Web/Mobile Development
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Cloud Architecture
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Hobbies</h5>
                <ul>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Astronomy
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Gardening
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container center-align">
              © 2020 Copyright Khairunnasul
            </div>
          </div>
        </footer>
      );
    } else if (this.state.stage === 'dev') {
      return (
        <footer className="page-footer black">
          <div className="container">
            <div className="row">
              <div className="col l7 s12 left-align">
                <h5
                  className="white-text center-align"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  Khai Fahmi
                </h5>
                <p className="grey-text text-lighten-4 center-align">
                  Actively seeking opportunities to further enhance my skills in
                  the field of computer science. Mostly passionate in the area
                  of Machine Learning and Artificial Intelligence.
                </p>
              </div>
              <div className="col l5 s12 left-align hide-on-med-only">
                <h5 style={{ fontFamily: 'Montserrat' }}>Connect</h5>
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li fa fa-phone fa-lg" aria-hidden="true" />{' '}
                    : (+61) 4 0104 3474
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-envelope fa-lg"
                      aria-hidden="true"
                    />{' '}
                    : khaifahmi99@gmail.com
                  </li>
                  <li>
                    <a
                      className="white-text"
                      href="https://www.linkedin.com/in/khaifahmi/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa-li fa fa-linkedin fa-lg"
                        aria-hidden="true"
                      />{' '}
                      : https://www.linkedin.com/in/khaifahmi/
                    </a>
                  </li>
                  <li>
                    <a
                      className="white-text"
                      href="https://github.com/khaifahmi99"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa-li fa fa-github fa-lg"
                        aria-hidden="true"
                      />{' '}
                      : https://github.com/khaifahmi99
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col s12 center-align hide-on-large-only hide-on-small-only">
                <h5 style={{ fontFamily: 'Montserrat' }}>Connect</h5>
                <p className="white-text">
                  <i className="fa fa-phone fa-lg" aria-hidden="true" /> : (+61)
                  4 0104 3474
                </p>
                <p className="white-text">
                  <i className="fa fa-envelope fa-lg" aria-hidden="true" /> :
                  khaifahmi99@gmail.com
                </p>
                <p>
                  <a
                    className="white-text"
                    href="https://www.linkedin.com/in/khaifahmi/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fa fa-linkedin fa-lg" aria-hidden="true" /> :
                    https://www.linkedin.com/in/khaifahmi/
                  </a>
                </p>
                <p>
                  <a
                    className="white-text"
                    href="https://github.com/khaifahmi99"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fa fa-github fa-lg" aria-hidden="true" /> :
                    https://github.com/khaifahmi99
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div
              className="container center-align"
              style={{ fontFamily: 'Montserrat' }}
            >
              © 2021 Copyright Khairunnasul
            </div>
          </div>
        </footer>
      );
    }
  }
}

import React from 'react';
import M from 'materialize-css';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        M.Sidenav.init(this.sidenav);
    }

    render() {
        return (
            <div className="navbar-fixed">
                <nav className="black">
                    <div className="nav-wrapper">
                        <div className="row">
                            <div className="col s4">
                                <a href="/" className="brand-logo hide-on-med-and-down" style={{paddingLeft: "24px", fontFamily: "comic sans ms"}}>KHAI FAHMI.</a>
                                <a href="/" className="brand-logo center-align hide-on-large-only" style={{fontFamily: "comic sans ms"}}>KHAI FAHMI.</a>
                                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            </div>
                            <ul class="right hide-on-med-and-down">
                                {/* <li><a href="#">Profile</a></li> */}
                                <li><a href="/projects">Projects</a></li>
                                {/* <li><a href="#">Hobbies</a></li> */}
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                            <ul className="sidenav" id="mobile-demo" ref={ (sidenav) => {this.sidenav = sidenav} }>
                                {/* <li><a href="#">Profile</a></li> */}
                                <li><a href="/projects">Projects</a></li>
                                {/* <li><a href="#">Hobbies</a></li> */}
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}
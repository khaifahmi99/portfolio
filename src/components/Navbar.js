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
                    <a href="#" className="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Hobbies</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo" ref={ (sidenav) => {this.sidenav = sidenav} }>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Hobbies</a></li>
                        <li><a href="#">Contact</a></li>
                </ul>
            </div>
        )
    }

}
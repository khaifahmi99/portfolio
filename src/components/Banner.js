import React from 'react';
import M from 'materialize-css';
import home from '../assets/home.jpg';
import profile from '../assets/profile.png';

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        M.Parallax.init(this.parallax, {});
        this.parallaxContainer.style.height = "80vh";
        this.parallaxContainer.style.marginBottom = "60px";
    }

    render() {
        return (
        <div className="banner">
            <div className="parallax-container center valign-wrapper" ref={ (parallaxContainer) => {this.parallaxContainer = parallaxContainer} }>
                <div className="row">
                    <div className="container">
                        <div className="col l4 s12 center-align">
                            <img className="responsive-img circle profile-pic" src={profile} alt=""/>
                        </div>
                        <div className="col l8 s12 white-text left-align">
                            <h2>Khai Fahmi</h2>
                            <p className="left-align">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores saepe vel rerum corporis! Blanditiis deserunt tenetur consectetur maxime. Fugiat ratione perferendis voluptates eos sint possimus soluta beatae iusto nobis eius!</p>
                            <hr/>
                            <div className="row">
                                <a href="https://www.linkedin.com/in/khaifahmi/" className="btn black lighten-2 white-text margin-btn">LinkedIn<i className="fa fa-linkedin-square right" aria-hidden="true"></i></a>
                                <a href="https://github.com/khaifahmi99" className="btn black lighten-2 white-text margin-btn">Github<i className="fa fa-github right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="parallax" ref={ (parallax) => {this.parallax = parallax} }>
                    <img src={home}/>
                </div>
            </div>
        </div>
        )
    }

}
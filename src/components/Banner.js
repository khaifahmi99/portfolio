import React from 'react';
import M from 'materialize-css';
import sky from '../assets/sky.jpg';
import ProfileUi from 'react-profile-card';

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        M.Parallax.init(this.parallax, {});
        this.parallaxContainer.style.height = "90vh";
        this.parallaxContainer.style.marginBottom = "60px";
        this.parallaxContainer.style.width = "100%";
    }

    // profile pic url: 
    // https://firebasestorage.googleapis.com/v0/b/khaifahmicreative.appspot.com/o/profile.jpg?alt=media&token=d889af1f-b0b0-466a-abc7-3e071e719168

    render() {
        return (
        <div className="banner">
            <div className="parallax-container center valign-wrapper" ref={ (parallaxContainer) => {this.parallaxContainer = parallaxContainer} }>
                <div className="row">
                    <div className="container">
                        <div className="col l5 s8 offset-s2">
                            <div className="row hide-on-large-only"></div>
                            <ProfileUi 
                                imgUrl="https://firebasestorage.googleapis.com/v0/b/khaifahmicreative.appspot.com/o/profile.jpg?alt=media&token=d889af1f-b0b0-466a-abc7-3e071e719168"
                                name='Khai Fahmi' 
                                designation='Melbourne' 
                            />
                        </div>
                        <div className="col l7 s12 white-text left-align">
                            <h4>Machine Learning and App Development</h4>
                            <p className="left-align">I do projects around topics that I am interested and passionate about such as machine learning, app development, cloud computing and Internet of Things. Actively seeking for opportunities to further enhance my skills and to make life more interesting.</p>
                            <hr/>
                            <div className="row">
                                <a href="https://www.linkedin.com/in/khaifahmi/" className="btn white black-text margin-btn">LinkedIn<i className="fa fa-linkedin-square right" aria-hidden="true"></i></a>
                                <a href="https://github.com/khaifahmi99" className="btn white black-text margin-btn">Github<i className="fa fa-github right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="parallax" ref={ (parallax) => {this.parallax = parallax} }>
                    <img src={sky}/>
                </div>
            </div>
        </div>
        )
    }

}
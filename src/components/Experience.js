import React from 'react';
import Typing from 'react-typing-animation';

import profile from '../assets/profile.png';
import csiro from '../assets/csiro.png';
import usku from '../assets/usku.png';

export default class Experience extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{paddingTop: "48px", paddingBottom: "48px"}}>
                <div className="container">
                    <Typing>
                        <h3 className="left-align">Past Experience</h3>
                        <Typing.Delay ms={1000000}/>
                    </Typing>
                    <div className="row">
                        <div className="col s12">
                        <div className="card grey darken-4 z-depth-5 hoverable">
                            <div className="card-content white-text">
                                <div className="row">
                                    <div className="col s3 center-align">
                                        <p>
                                            <img className="responsive-img" src={usku} alt="company-logo"/> 
                                        </p>
                                    </div>
                                    <div className="col s9">
                                        <div className="col s6">
                                            <span className="card-title">Usku Technologies</span>
                                        </div>
                                        <div className="col s6 right-align">
                                            <span>2018 - 2021</span>
                                        </div>
                                        <div className="col s12">
                                            <h4>Fullstack Developer</h4>
                                            <p>Worked as a team in developing the website and mobile application during early stages. Has been actively maintaining and adding features to the system on handling large traffic of logistic requests around Melbourne. Include adoption of cutting edge technologies in the application such as Slack API, Android application, React.js and Google cloud services.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12">
                        <div className="card grey darken-4 z-depth-5 hoverable">
                            <div className="card-content white-text">
                                <div className="row">
                                    <div className="col s3 center-align">
                                        <p>
                                            <img className="responsive-img" src={csiro} alt="company-logo"/> 
                                        </p>
                                    </div>
                                    <div className="col s9">
                                        <div className="col s6">
                                            <span className="card-title">CSIRO Data61</span>
                                        </div>
                                        <div className="col s6 right-align">
                                            <span>2019 - 2020</span>
                                        </div>
                                        <div className="col s12">
                                            <h4>Research Affiliate</h4>
                                            <p>Awarded the CSIRO Data61 Summer Vacation Scholarship 2019/2020. Has been involved in a project that requires the implementation in the area of machine learning, natural language processing, data science and website development. The project is mainly using these technology to analyse a collection of resumes. Has been closely working under the supervision of 2 researchers from Swinburne University of Technology and Western Sydney University.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
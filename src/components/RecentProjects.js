import React from 'react';
import M from 'materialize-css';
import profile from '../assets/profile.png';
import Tags from './Tags';
import Typing from 'react-typing-animation';

export default class RecentProjects extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        M.Carousel.init(this.carousel ,{fullWidth: true, indicators: true});
    }

    render() {
        return (
            <div className="grey lighten-4" style={{paddingBottom: "24px", paddingTop: "24px"}}>
                <div className="container">
                    <Typing>
                        <h3 className="left-align">Recent Projects</h3>
                        <Typing.Delay ms={1000000}/>
                    </Typing>
                </div>
                <div className="carousel carousel-slider center" ref={ (carousel) => {this.carousel = carousel} }>
    
                    <div className="carousel-item" href="#one!">
                        <div className="container left-align">
                            <h2><i class="fa fa-play" aria-hidden="true"></i> Resume Analytics</h2>
                            <h6>2019 - Ongoing</h6>
                            <hr/>
                            <p className="">Working on a research paper and project development under the supervision of 2 senior lecturers from Swinburne University of Technology and Western Sydney University during the period of CSIRO Data61 summer vacation program 2019/2020. Delivered a prototype at the end of the program and continue working on writing research paper. I developed skills and have a deep understanding focusing around Machine Learning, Natural Language Processing and Web Development along the program.</p>
                            <Tags text="Machine Learning" att="red white-text"/>
                            <Tags text="Natural Language Processing" att="blue white-text"/>
                            <Tags text="Python" att="green white-text"/>
                            <Tags text="Django" att="purple white-text"/>
                        </div>
                    </div>
    
                    <div className="carousel-item" href="#two!">
                        <div className="container left-align">
                            <h2><i class="fa fa-play" aria-hidden="true"></i> IOT Smart Parking Project</h2>
                            <h6>2020</h6>
                            <hr/>
                            <p className="">Developed an IoT solution for smart parking implementation using technologies such as Arduino, ESP8266, Raspberry Pi, Mosquitto MQTT, Node Red, AWS IOT, DynamoDB, Flask and Android. This project is aligned as a group project for IOT Programming unit at Swinburne</p>
                            <Tags text="Cloud Computing" att="red white-text"/>
                            <Tags text="MQTT" att="blue white-text"/>
                            <Tags text="Arduino" att="green white-text"/>
                            <Tags text="AWS IOT" att="purple white-text"/>
                            <Tags text="Computer Vision" att="orange darken-1 white-text"/>
                            <Tags text="REST API" att="pink white-text"/>
                        </div>
                    </div>

                    <div className="carousel-item" href="#three!">
                        <div className="container left-align">
                            <h2><i class="fa fa-play" aria-hidden="true"></i> GameZass Android Application</h2>
                            <h6>2019</h6>
                            <hr/>
                            <p className="">Develop an android mobile app focusing to advertise board games and related information for anyone new to the hobby or enthusiasts. This project includes using technology such as Firebase, REST API, android development and Google Maps. The project is made for Software Development for Mobile unit at Swinburne.</p>
                            <Tags text="Android" att="red white-text"/>
                            <Tags text="Mobile Development" att="blue white-text"/>
                            <Tags text="Firebase" att="green white-text"/>
                            <Tags text="Google Maps API" att="purple white-text"/>
                        </div>
                    </div>

                    <div className="carousel-item" href="#four!">
                        <div className="container left-align">
                            <h2><i class="fa fa-play" aria-hidden="true"></i> Advance Persistent Theat Analysis – Weapon and Delivery</h2>
                            <h6>2019</h6>
                            <hr/>
                            <p className="">Working on a project under a PhD candidate from Swinburne to do analysis on APT attacks based on industry reports. The project look into the network of these attacks in terms of their attacker, countries associated, victims, weapon used and many more. Developed skills mainly but not limited to python programming, data science and word vector.</p>
                            <Tags text="Data Analysis" att="red white-text"/>
                            <Tags text="Word Embeddings" att="blue white-text"/>
                            <Tags text="Python" att="green white-text"/>
                            <Tags text="Data Visualisation" att="purple white-text"/>
                        </div>
                    </div>

                    <div className="carousel-item" href="#five!">
                        <div className="container left-align">
                            <h2><i class="fa fa-play" aria-hidden="true"></i> Usku Technologies Website and Mobile Application</h2>
                            <h6>2018 - Ongoing</h6>
                            <hr/>
                            <p className="">Developing and maintaining website and mobile application for a startup. Responsible for any troubleshooting, server-side and client-side development including integrating API into applications.</p>
                            <Tags text="Android" att="red white-text"/>
                            <Tags text="React.js" att="blue white-text"/>
                            <Tags text="Firebase" att="green white-text"/>
                            <Tags text="Python" att="purple white-text"/>
                            <Tags text="Google Maps API" att="orange darken-1 white-text"/>
                        </div>
                    </div>
                </div>
                <div className="center-align" style={{marginBottom: "96px"}}>
                    <a href="/projects" className="btn black hoverable waves-effect waves-light">See All</a>
                </div>
            </div>
        )
    }
}
import React from 'react';
import M from 'materialize-css';
import Tags from './Tags';
import Typing from 'react-typing-animation';

export default class RecentProjects extends React.Component {
    componentDidMount() {
        M.Carousel.init(this.carousel ,{fullWidth: true, indicators: true});
    }

    render() {
        return (
            <div className="grey lighten-4" style={{paddingBottom: "24px", paddingTop: "24px"}}>
                <div className="container">
                    <Typing>
                        <h3 className="left-align" style={{fontFamily: "Montserrat"}}>Recent Projects</h3>
                        <Typing.Delay ms={1000000}/>
                    </Typing>
                </div>
                <div className="carousel carousel-slider center" ref={ (carousel) => {this.carousel = carousel} }>

                    <div className="carousel-item" href="#one!">
                        <div className="container left-align">
                            <h2 style={{fontFamily: "Montserrat"}}><i className="fa fa-play" aria-hidden="true" /> Farming Management Mobile and Website Application</h2>
                            <h6 style={{fontFamily: "Montserrat"}}>2020 - 2021</h6>
                            <hr/>
                            <p className="">While working as a developer intern at Mobble, I am responsible in developing and maintaining farming management website and mobile application. Working in a team of 4 developers with diverse background, and technologies used include React and React Native, Typescript, REST, AWS and GraphQL. I have been highly involved in all the SDLC areas and also taught to deploy the application using CI/CD technologies.</p>
                            <Tags text="Typescript" att="red white-text"/>
                            <Tags text="React" att="blue white-text"/>
                            <Tags text="React Native" att="green white-text"/>
                            <Tags text="GraphQL" att="purple white-text"/>
                            <Tags text="REST API" att="yellow darken-2 white-text"/>
                            <Tags text="CI/CD" att="orange white-text"/>
                        </div>
                    </div>

                    <div className="carousel-item" href="#two!">
                        <div className="container left-align">
                            <h2 style={{fontFamily: "Montserrat"}}><i className="fa fa-play" aria-hidden="true" /> Cough Detection on Embedded Device using IoT and Deep Learning</h2>
                            <h6 style={{fontFamily: "Montserrat"}}>2020</h6>
                            <hr/>
                            <p className="">Developed a cough detection prototype in public spaces using audio and image processing to avoid the spread of Covid-19. This project aims to compare the efficiency of machine learning in embedded devices such as Arduino Portenta H7, OpenMV Camera and Arduino Nano BLE. The deep learning models are deployed as Tensorflow-Lite models while developed in Keras. The outcomes are compiled in a research paper that that covers other covid-19 solutions. This project is related to a research-based unit at Swinburne University.</p>
                            <Tags text="Keras" att="red white-text"/>
                            <Tags text="Tensorflow Lite" att="blue white-text"/>
                            <Tags text="Python" att="green white-text"/>
                            <Tags text="Embedded Device" att="purple white-text"/>
                            <Tags text="AWS" att="orange white-text"/>
                        </div>
                    </div>

                    <div className="carousel-item" href="#three!">
                        <div className="container left-align">
                            <h2 style={{fontFamily: "Montserrat"}}><i className="fa fa-play" aria-hidden="true" /> Resume Analytics</h2>
                            <h6 style={{fontFamily: "Montserrat"}}>2019 - 2020</h6>
                            <hr/>
                            <p className="">Working on a research paper and project development under the supervision of 2 senior lecturers from Swinburne University of Technology and Western Sydney University during the period of CSIRO Data61 summer vacation program 2019/2020. Delivered a prototype at the end of the program and continue working on writing research paper. I developed skills and have a deep understanding focusing around Machine Learning, Natural Language Processing and Web Development along the program.</p>
                            <Tags text="Machine Learning" att="red white-text"/>
                            <Tags text="Natural Language Processing" att="blue white-text"/>
                            <Tags text="Python" att="green white-text"/>
                            <Tags text="Django" att="purple white-text"/>
                        </div>
                    </div>
    
                    <div className="carousel-item" href="#four!">
                        <div className="container left-align">
                            <h2 style={{fontFamily: "Montserrat"}}><i className="fa fa-play" aria-hidden="true" /> IOT Smart Parking Project</h2>
                            <h6 style={{fontFamily: "Montserrat"}}>2020</h6>
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

                    <div className="carousel-item" href="#five!">
                        <div className="container left-align">
                            <h2 style={{fontFamily: "Montserrat"}}><i className="fa fa-play" aria-hidden="true" /> Advance Persistent Theat Analysis – Weapon and Delivery</h2>
                            <h6 style={{fontFamily: "Montserrat"}}>2019</h6>
                            <hr/>
                            <p className="">Working on a project under a PhD candidate from Swinburne to do analysis on APT attacks based on industry reports. The project look into the network of these attacks in terms of their attacker, countries associated, victims, weapon used and many more. Developed skills mainly but not limited to python programming, data science and word vector.</p>
                            <Tags text="Data Analysis" att="red white-text"/>
                            <Tags text="Word Embeddings" att="blue white-text"/>
                            <Tags text="Python" att="green white-text"/>
                            <Tags text="Data Visualisation" att="purple white-text"/>
                        </div>
                    </div>
                </div>
                <div className="center-align" style={{marginBottom: "96px"}}>
                    <a href="/projects" className="btn black hoverable waves-effect waves-light" style={{fontFamily: "Montserrat"}}>See All</a>
                </div>
            </div>
        )
    }
}
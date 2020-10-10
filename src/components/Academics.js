import React from 'react';
import { useState } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import ListCard from './ListCard';

import LineTo from 'react-lineto';
import DataTable from 'react-data-table-component';
import Typing from 'react-typing-animation';

import resume from '../assets/resume.png';
import transcript from '../assets/transcript.png';

function Academics() {

    const [view, setView] = useState("Table");

    const data = [
        { id: 1, semester: 'semester 4', year: '2020', unit: 'IOT Programming', score: '91', grade: 'HD' },
        { id: 2, semester: 'semester 4', year: '2020', unit: 'Software Engineering Project A', score: '93', grade: 'HD' },
        { id: 3, semester: 'semester 4', year: '2020', unit: 'Intoduction to Data Science', score: '82*', grade: 'HD*' },
        { id: 4, semester: 'semester 4', year: '2020', unit: 'IT Project Management', score: '73*', grade: 'D*' },
        { id: 5, semester: 'semester 3', year: '2019', unit: 'Computer & Logics Essentials', score: '91', grade: 'HD' },
        { id: 6, semester: 'semester 3', year: '2019', unit: 'Fundamentals of Data Management', score: '85', grade: 'HD' },
        { id: 7, semester: 'semester 3', year: '2019', unit: 'IT Security', score: '86', grade: 'HD' },
        { id: 8, semester: 'semester 3', year: '2019', unit: 'Software Devices for Mobile Devices', score: '85', grade: 'HD' },
        { id: 9, semester: 'semester 2', year: '2019', unit: 'Object Oriented Programming', score: '85', grade: 'HD' },
        { id: 10, semester: 'semester 2', year: '2019', unit: 'Cloud Computing Architecture', score: '86', grade: 'HD' },
        { id: 11, semester: 'semester 2', year: '2019', unit: 'Data Visualisation', score: '86', grade: 'HD' },
        { id: 12, semester: 'semester 2', year: '2019', unit: 'Development Project 1: Tools and Practices', score: '90', grade: 'HD' },
        { id: 13, semester: 'semester 1', year: '2018', unit: 'Introduction to Programming', score: '90', grade: 'HD' },
        { id: 14, semester: 'semester 1', year: '2018', unit: 'Foundation of Statistics', score: '85', grade: 'HD' },
        { id: 15, semester: 'semester 1', year: '2018', unit: 'Creating Web Application', score: '95', grade: 'HD' },
        { id: 16, semester: 'semester 1', year: '2018', unit: 'Networks and Switching', score: '84', grade: 'HD' },
    ];

    const columns = [
        {
            name: 'Unit',
            selector: 'unit',
            sortable: true,
            minWidth: "300px"
        },
        {
            name: 'Score',
            selector: 'score',
            sortable: true,
        },
        {
            name: 'Grade',
            selector: 'grade',
            sortable: true,
        },
        {
            name: 'Year',
            selector: 'year',
            sortable: true,
        },
        {
            name: 'Semester',
            selector: 'semester',
            sortable: true,
        }
    ];

    // swap view
    function changeView(e) {
        e.persist();
        if (view === "Table") {
            setView("Card");
        } else {
            setView("Table");           
        }
    }

    if (view === "Card") {
        return(
            <div className="grey lighten-3">
                <Navbar />
    
                <div className="center-align">
                    <h1 style={{fontFamily: "Montserrat"}}>ACADEMICS</h1>
                </div>
                <div>
                    <a className="btn right black waves-effect waves-light hoverable" onClick={changeView} style={{margin: "20px"}}>Table View<i class="material-icons white-text right">view_column</i></a>
                </div>
                <div>
                    <div className="row">
                        <div className="col l3 hide-on-med-and-down right-align" style={{marginTop: "30px"}}>
                            <p className="white-text">p</p>
                            <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="khaifahmi"><a className="LI-simple-link" href='https://au.linkedin.com/in/khaifahmi?trk=profile-badge'>Khai Fahmi Zaki</a></div>
                            <br/>
                            <div>
                                <img src={resume} alt="" style={{width: "250px"}}/>
                                <br/>
                                <a className="black-text" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/khaifahmicreative.appspot.com/o/Resume%202020.pdf?alt=media&token=034718ce-8d40-447f-9138-537806221fa9" download>Resume<i class="material-icons black-text right">file_download</i></a>
                                <br/><br/>
                                <img src={transcript} alt="" style={{width: "250px"}}/>
                                <br/>
                                <a className="black-text" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/khaifahmicreative.appspot.com/o/AcademicRecord-2020.pdf?alt=media&token=3db00fe1-244f-483e-b2b3-8a8e89cf380d" download>Academic Transcript<i class="material-icons black-text right">file_download</i></a>
                            </div>
                        </div>
                        <div className="col s12 l9">
                            <ListCard className="A" year="2020" semester="semester 4" units={["Introduction to Data Science", "IOT Programming", "Software Engineering Project A", "IT Project Management"]} scores={["82*", "91", "93", "73*"]} />
                            <ListCard className="B" year="2019" semester="semester 3" units={["Software Development for Mobile Devices", "IT Security", "Fundamentals of Data Management", "Computer Logics and Essentials"]} scores={["85", "86", "85", "91"]} />
                            <ListCard className="C" year="2019" semester="semester 2" units={["Object Oriented Programming", "Development Project 1: Tools and Practices", "Cloud Computing", "Data Visualisation"]} scores={["85", "90", "86", "86"]} />
                            <ListCard className="D" year="2018" semester="semester 1" units={["Introduction to Programming", "Foundation of Statistics", "Creating Web Application", "Network and Switching"]} scores={["90", "85", "95", "84"]} />
                            
                            <LineTo delay={0} borderColor="black" from="A" to="B" />
                            <LineTo delay={0} borderColor="black" from="B" to="C" />
                            <LineTo delay={0} borderColor="black" from="C" to="D" />
                            <p>(*) Detonates the grades omitted for every unit that is below the course overall marks during Covid-19</p>
                        </div>
                        <div className="col s12 m6 hide-on-large-only right-align">
                            <img className="responsive-img" src={resume} alt=""/>
                            <br/>
                            <a className="black-text" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/khaifahmicreative.appspot.com/o/Resume%202020.pdf?alt=media&token=034718ce-8d40-447f-9138-537806221fa9" download>Resume<i class="material-icons black-text right">file_download</i></a>
                        </div>
                        <br/><br/>
                        <div className="col s12 m6 hide-on-large-only right-align">
                            <img className="responsive-img" src={transcript} alt=""/>
                            <br/>
                            <a className="black-text" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/khaifahmicreative.appspot.com/o/AcademicRecord-2020.pdf?alt=media&token=6d22b75c-6fd5-4144-80a1-efe55c9b4ceb" download>Academic Transcript<i class="material-icons black-text right">file_download</i></a>
                        </div>
                    </div>
                </div>
    
                <Footer />
            </div>
        )    
    } else if (view === "Table") {
        return(
            <div className="grey lighten-3">
                <Navbar />
    
                <div className="center-align">
                    <Typing startDelay={400}>
                        <h1 style={{fontFamily: "Montserrat"}}>ACADEMICS</h1>
                        <Typing.Delay ms={1000000000} />
                    </Typing>
                </div>
                <div>
                    <a className="btn right black waves-effect waves-light hoverable" onClick={changeView} style={{margin: "20px", fontFamily: "Montserrat"}}>Card View<i class="material-icons white-text right">view_stream</i></a>
                </div>
                <div>
                    <div className="row">
                        <div className="col l3 hide-on-med-and-down right-align" style={{marginTop: "30px"}}>
                            <p className="white-text">p</p>
                            <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="khaifahmi"><a className="LI-simple-link" href='https://au.linkedin.com/in/khaifahmi?trk=profile-badge'>Khai Fahmi Zaki</a></div>
                            <br/>
                            <div>
                                <img src={resume} alt="" style={{width: "250px"}}/>
                                <br/>
                                <a className="black-text" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/khaifahmicreative.appspot.com/o/Resume%202020.pdf?alt=media&token=034718ce-8d40-447f-9138-537806221fa9" download>Resume<i class="material-icons black-text right">file_download</i></a>
                                <br/><br/>
                                <img src={transcript} alt="" style={{width: "250px"}}/>
                                <br/>
                                <a className="black-text" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/khaifahmicreative.appspot.com/o/AcademicRecord-2020.pdf?alt=media&token=3db00fe1-244f-483e-b2b3-8a8e89cf380d" download>Academic Transcript<i class="material-icons black-text right">file_download</i></a>
                            </div>
                        </div>
                        <div className="col s12 l9">
                            {/* Render Table */}
                            <DataTable
                                title="Bachelor in Computer Science (Data Science and IoT Major)"
                                striped={true}
                                columns={columns}
                                data={data}
                            />
                            <p>(*) Detonates the grades omitted for every unit that is below the course overall marks during Covid-19</p>
                        </div>
                        <div className="col s12 m6 hide-on-large-only right-align">
                            <img className="responsive-img" src={resume} alt=""/>
                            <br/>
                            <a className="black-text" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/khaifahmicreative.appspot.com/o/Resume%202020.pdf?alt=media&token=034718ce-8d40-447f-9138-537806221fa9" download>Resume<i class="material-icons black-text right">file_download</i></a>
                        </div>
                        <br/><br/>
                        <div className="col s12 m6 hide-on-large-only right-align">
                            <img className="responsive-img" src={transcript} alt=""/>
                            <br/>
                            <a className="black-text" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/khaifahmicreative.appspot.com/o/AcademicRecord-2020.pdf?alt=media&token=6d22b75c-6fd5-4144-80a1-efe55c9b4ceb" download>Academic Transcript<i class="material-icons black-text right">file_download</i></a>
                        </div>
                    </div>
                </div>
    
                <Footer />
            </div>
        )    
    }
}

export default Academics;
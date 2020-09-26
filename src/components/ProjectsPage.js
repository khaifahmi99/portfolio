import React, { useState, useEffect } from 'react';
import db from './Firebase/firebase.js';
import Skeleton from 'react-loading-skeleton';
import Typing from 'react-typing-animation';

import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
import Tags from './Tags';

function ProjectsPage() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getData() {
            const temp = [];
            try {
                await db.collection('projects')
                    .get()
                    .then((querySnapshot) => {
                        console.log('inside firebase: ' + querySnapshot.size);
                        querySnapshot.forEach((doc) => {
                            const proj = doc.data();
                            proj['id'] = doc.id;
                            temp.push(proj);
                        })
                    });
            } catch (e) {
                console.log('There is an error when fetching data');
            } finally {
                setProjects(temp);
                setLoading(false);
                console.log(projects);
            }
        }
        getData();

    }, []);


    if (loading) {
        return (
            <div>
                <Navbar />
                <div className="container center-align">
                    <h1>Projects</h1>
                    <div className="row">
                        {[...Array(4)].map((x, i) =>
                            <div className="col s12 l6">
                                <div className="card large grey lighten-1 white-text">
                                    <div className="card-content left-align">
                                        <span className="card-title">{<Skeleton width={400}/>}</span>
                                        <span>{<Skeleton width={200}/>}</span>
                                        <p>{<Skeleton count={6}/>}</p>
                                        <br/>
                                        <span>{<Skeleton width={300} />}</span>
                                    </div>
                                    <div className="card-action left-align">
                                        <a className="white-text">{<Skeleton width={200} style={{padding: "4px"}}/>}</a>
                                    </div>
                                </div>
                                <br/><br/>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        )
    } else if (!loading) {
        return (
            <div>
                <Navbar />
                <div className="center-align">
                <Typing>
                        <h1 className="">PROJECTS</h1>
                        <Typing.Delay ms={1000000000} />
                    </Typing>
                    <div className="container">
                        <div className="row">
                            {projects.length>0 && projects.map(project => <Card project={project} />)}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ProjectsPage;
import React, { useState, useEffect } from 'react';
import db from './Firebase/firebase.js';

import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';

function ProjectsPage() {

    const [projects, setProjects] = useState([]);

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
                console.log(projects);
            }
        }
        getData();

    }, []);

    return (
        <div>
            <Navbar />
            <div className="center-align">
                <h1>Projects</h1>
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

export default ProjectsPage;
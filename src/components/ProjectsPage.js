import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Banner from './Banner';
import Card from './Card';

function ProjectsPage() {

    const [projects, setProjects] = useState([
        {'name': 'project 1', 'year': '2020', 'description': 'description test lorem', 'tags': ['AWS', 'Data Science']},
        {'name': 'project 2', 'year': '2019', 'description': 'description test lorem', 'tags': ['IOT']},
    ]);

    useEffect(() => {
        
    })

    return (
        <div>
            <Navbar />
            <div className="center-align">
                <h1>{'{ Projects }'}</h1>
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
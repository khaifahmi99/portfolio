import React from 'react';
import { useEffect } from 'react';

import db from './Firebase/firebase.js';

import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';

function SingleProjectPage(props) {

    const { id } = props.match.params;
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState("");

    useEffect(() => {
        async function getData() {
            try {
                db.collection('projects').doc(id)
                    .get()
                    .then((doc) => {
                        setProject(doc.data());
                        setLoading(false);
                    })
            } catch (e) {
                setError('There is an error in fetching the project data');
            }
        }

        getData();
    }, [])

    if (error === "" && !loading) {
        console.log(project);
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h1>Welcome to project page {id}</h1>

                    <h2>Project Name: {project.name}</h2>
                    <p>{project.startYear} - {project.endYear}</p>
                    {project.descriptions.length>0 && project.descriptions.map(description => <p>{description}</p>)}
                </div>
                <Footer />
            </div>
        )
    } else if (error !== "") {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h1>{error}</h1>
                </div>
                <Footer />
            </div>
        )
    } else if (loading) {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h1>Welcome to project page {id}</h1>
                    <h1>Loading Information...</h1>
                </div>
                <Footer />
            </div>
        )
    }
}

export default SingleProjectPage;
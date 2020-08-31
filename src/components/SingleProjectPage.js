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
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h2>{project.name}</h2>
                    <p>{project.startYear} - {project.endYear}</p>
                    <p>{project.shortDescription}</p>
                    <hr/>
                    <p><b>Tags: </b></p>
                    {project.tags.length>0 && project.tags.map(tag => <p>{tag}</p>)}
                </div>
                <br/><br/>
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